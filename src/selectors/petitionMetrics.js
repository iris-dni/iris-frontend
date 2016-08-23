import getPetitionTimeMetrics from './petitionTimeMetrics';
import getPetitionSupportersMetrics from './petitionSupportersMetrics';

export default (petition = {}) => {
  return {
    timeMetric: getPetitionTimeMetrics(petition),
    supportersMetric: getPetitionSupportersMetrics(petition)
  };
};
