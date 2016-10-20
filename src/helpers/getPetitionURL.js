export default (id) => (
  id
    ? [process.env.BASE_URL, 'petitions', id].join('/')
    : ''
);
