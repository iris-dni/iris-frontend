import getPetitionSupportersMetrics from './petitionSupportersMetrics';

export default (petition = {}) => {
  const supportersMetrics = getPetitionSupportersMetrics(petition);
  const { percentage, aria, votingActive } = supportersMetrics;
  return {
    percentage,
    aria,
    votingActive
  };
};
