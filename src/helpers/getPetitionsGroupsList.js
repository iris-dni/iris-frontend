export default () => [
  {
    group: 'latest',
    query: {
      state: 'current',
      limit: 3,
      sort: 'created'
    }
  },
  {
    group: 'trending',
    query: {
      state: 'winning',
      limit: 6,
      sort: 'supporters.amount'
    }
  }
];
