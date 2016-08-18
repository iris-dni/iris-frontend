import getPetitionTimeMetric from './petitionTimeMetric';
import getPetitionSupportersMetric from './petitionSupportersMetric';

export default (petition = {}) => {
  return {
    timeMetric: getPetitionTimeMetric(petition),
    supportersMetric: getPetitionSupportersMetric(petition)
  };
};
