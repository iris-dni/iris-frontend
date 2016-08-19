import getPetitionSupportersMetrics from './petitionSupportersMetrics';

export default (petition = {}) => {
  const supportersMetrics = getPetitionSupportersMetrics(petition);
  return ({ percentage, aria, votingActive }) => supportersMetrics;
};
