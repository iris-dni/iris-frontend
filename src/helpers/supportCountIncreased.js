export default (originalPetition, updatedPetition) => {
  const originalSupport = originalPetition.supporters || {};
  const updatedSupport = updatedPetition.supporters || {};
  return updatedSupport.amount > originalSupport.amount;
};
