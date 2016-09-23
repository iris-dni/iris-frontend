export default (petition = {}) => ({
  total: petition.supporters && petition.supporters.amount,
  required: petition.supporters && petition.supporters.required
});
