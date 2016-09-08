export default (petition) => {
  return `/petitions/${petition && petition.id}`;
};
