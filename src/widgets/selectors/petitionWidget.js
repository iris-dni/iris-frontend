import getPetitionByline from 'widgets/helpers/getPetitionByline';
import getPetitionMetrics from 'selectors/petitionMetrics';
import getPetitionProgress from 'selectors/petitionProgress';
import getPetitionURL from 'helpers/getPetitionURL';

export default (petition) => {
  const metrics = getPetitionMetrics(petition);
  return {
    id: petition.id,
    title: petition.title,
    link: getPetitionURL(petition),
    byline: getPetitionByline(petition),
    stats: {
      total: metrics.supportersMetric.figure,
      required: metrics.supportersMetric.total,
      daysLeft: metrics.timeMetric.figure
    },
    progress: getPetitionProgress(petition)
  };
};
