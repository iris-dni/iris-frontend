export default (petition = {}) => {
  const requiredVotes = petition.supporters && petition.supporters.required || 0;
  // FIXME: change check to -1 when API is behaving this way
  return requiredVotes > 0;
};
