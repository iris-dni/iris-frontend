export default (petition = {}) => {
  return {
    id: petition.id,
    total: petition.supporters && petition.supporters.amount,
    required: petition.supporters && petition.supporters.required
  };
};
