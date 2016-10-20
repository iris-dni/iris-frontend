export default (petition = {}) => ({
  amount: petition.supporters && petition.supporters.amount,
  required: petition.supporters && petition.supporters.required
});
