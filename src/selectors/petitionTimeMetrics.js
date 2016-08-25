import settings from 'settings';
import calculatePercentage from 'helpers/calculatePercentage';
import getPetitionDaysRemaining from 'helpers/getPetitionDaysRemaining';
import getPetitionVotingActive from './petitionVotingActive';

const getTimePercentage = (remainingDays, daysToVote) => {
  return 100 - calculatePercentage(remainingDays, daysToVote);
};

export default (petition = {}) => {
  const daysRemaining = getPetitionDaysRemaining(petition.dc || {});
  const daysToVote = settings.daysToVote;
  const timePercentage = getTimePercentage(daysRemaining, daysToVote);

  return {
    figure: daysRemaining,
    total: daysToVote,
    percentage: timePercentage,
    aria: {
      minimum: 0,
      maximum: daysToVote,
      value: daysToVote - daysRemaining
    },
    votingActive: getPetitionVotingActive(petition)
  };
};
