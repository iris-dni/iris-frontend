export default (petition, updatedPetition) => {
  return updatedPetition.supporters && updatedPetition.supporters.amount >
    petition.supporters && petition.supporters.amount;
};
