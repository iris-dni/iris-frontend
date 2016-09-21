export default (id) => (
  [process.env.BASE_URL, 'petitions', id].join('/')
);
