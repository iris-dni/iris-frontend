export default (petition = {}) => {
  return petition.city &&
    petition.city.data &&
    petition.city.data.name;
};
