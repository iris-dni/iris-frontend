import calculatePercentage from 'helpers/calculatePercentage';

export default (petition = {}) => {
  const requiredVotes = petition.supporters && petition.supporters.required;
  const amountVotes = petition.supporters && petition.supporters.amount;
  const votesPercentage = calculatePercentage(amountVotes, requiredVotes);
  // FIXME: change check to -1 when API is behaving this way
  const votingActive = requiredVotes > 0;

  return {
    figure: amountVotes,
    total: requiredVotes,
    percentage: votesPercentage,
    aria: {
      minimum: 0,
      maximum: requiredVotes,
      value: amountVotes
    },
    votingActive: votingActive
  };
};
