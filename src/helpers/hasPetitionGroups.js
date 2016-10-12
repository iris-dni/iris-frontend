export default (petitions = {}) => {
  Object.keys(petitions).forEach((petition) => {
    if (petitions[petition].length) {
      return true;
    }
  });

  return false;
};
