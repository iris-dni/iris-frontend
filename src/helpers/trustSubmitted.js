export default (petition, trust) => petition.id === trust.petitionId &&
  !trust.isSubmitting;
