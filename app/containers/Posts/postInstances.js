/**
 * Be aware teat months go from 0 to 11
 * 
 * TODO proabably use a database. There is a lot of unnecessary repetition going on here.
 * 
 */
const postInstances = new Map();

postInstances.set('Figuring Out Posts', {
  slug: 'figuring-out-posts',
  dates: [new Date(2017, 2, 4)],
});

postInstances.set('Title Goes Here', {
  slug: 'title-goes-here',
  dates: [new Date(2017, 2, 5)],
});

export default postInstances;
