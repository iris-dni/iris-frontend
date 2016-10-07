export default ({ limit }) => ({
  query: {
    state: 'current',
    limit: limit,
    sort: 'supporters.amount'
  }
});
