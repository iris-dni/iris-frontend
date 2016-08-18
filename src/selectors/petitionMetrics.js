import settings from 'settings';
import calculatePercentage from 'helpers/calculatePercentage';
import getPetitionDaysRemaining from './petitionDaysRemaining';

const getTimePercentage = (remainingDays, daysToVote) => {
  return 100 - calculatePercentage(remainingDays, daysToVote);
};

export default (petition) => {
  const daysRemaining = getPetitionDaysRemaining(petition.dc || {});
  const daysToVote = settings.daysToVote;
  const requiredVotes = petition.supporters && petition.supporters.required;
  const amountVotes = petition.supporters && petition.supporters.amount;
  const timePercentage = getTimePercentage(daysRemaining, daysToVote);
  const votesPercentage = calculatePercentage(amountVotes, requiredVotes);
  // FIXME: change check to -1 when API is behaving this way
  const votingActive = requiredVotes > 0;

  return {
    timeMetric: {
      figure: daysRemaining,
      total: daysToVote,
      percentage: timePercentage,
      aria: {
        minimum: 0,
        maximum: daysToVote,
        value: daysToVote - daysRemaining
      }
    },
    supportersMetric: {
      figure: amountVotes,
      total: requiredVotes,
      percentage: votesPercentage,
      aria: {
        minimum: 0,
        maximum: requiredVotes,
        value: amountVotes
      },
      votingActive: votingActive
    }
  };
};
