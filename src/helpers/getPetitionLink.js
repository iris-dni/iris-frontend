export default (id) => {
  return [
    process.env.BASE_URL,
    'petitions',
    id
  ].join('/');
};
