export default [
  {
    group: 'trending',
    query: {
      state: 'current',
      limit: 6,
      sort: 'trending'
    }
  },
  {
    group: 'latest',
    query: {
      state: 'current',
      limit: 3,
      sort: 'created'
    }
  }
];
