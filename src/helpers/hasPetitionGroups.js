export default ({ groupedPetitions }) => {
  Object.keys(groupedPetitions).forEach((group) => {
    if (groupedPetitions[group].length) {
      return true;
    }
  });

  return false;
};
