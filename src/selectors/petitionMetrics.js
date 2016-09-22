import getPetitionTimeMetrics from './petitionTimeMetrics';
import getPetitionSupportersMetrics from './petitionSupportersMetrics';

export default (petition = {}) => ({
  timeMetric: getPetitionTimeMetrics(petition),
  supportersMetric: getPetitionSupportersMetrics(petition)
});
