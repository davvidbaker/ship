/**
*
* Chunk
*
*/
import shortid from 'shortid';
import React from 'react';
// import styled from 'styled-components';

import WordChoice from 'components/WordChoice';
import Ellipsis from 'components/Ellipsis';

function Chunk({ type, children, ...props }) {
  let Tag;
  console.log(children, type);
  // TODO GET THIS OUTA HERE
  switch (type) {
    case 'wordChoice':
      Tag = WordChoice;
      break;

    case 'ellipsis':
      Tag = Ellipsis;
      break;

    /** Custom Elements Above */

    case 'heading':
      Tag = `h${props.depth}`;
      break;

    case 'paragraph':
      Tag = 'p';
      break;

    case 'text':
      Tag = 'span';
      break;

    case 'code':
      Tag = 'code';
      break;

    case 'strong':
      Tag = 'strong';
      break;

    case 'emphasis':
      Tag = 'em';
      break;

    case 'linkReference':
    case 'link':
      Tag = 'a';
      break;

    case 'root':
      Tag = 'div';
      break;

    default:
      Tag = 'span';
      break;

    // return null;
  }

  return (
    <Tag>
      {Array.isArray(children)
        ? children.map(child => {
            return (
              <Chunk type={child.type} key={shortid.generate()} {...child}>
                {child.children ? child.children : child.value}
              </Chunk>
            );
          })
        : children.value ? children.value : children}
    </Tag>
  );
}

Chunk.propTypes = {};

export default Chunk;
