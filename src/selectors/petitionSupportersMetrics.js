import calculatePercentage from 'helpers/calculatePercentage';
import getPetitionVotingActive from './petitionVotingActive';

export default (petition = {}) => {
  const requiredVotes = petition.supporters && petition.supporters.required || 0;
  const amountVotes = petition.supporters && petition.supporters.amount;
  const votesPercentage = calculatePercentage(amountVotes, requiredVotes);

  return {
    figure: amountVotes,
    total: requiredVotes,
    percentage: votesPercentage,
    aria: {
      minimum: 0,
      maximum: requiredVotes,
      value: amountVotes
    },
    votingActive: getPetitionVotingActive(petition)
  };
};
