import getPetitionByline from 'widgets/helpers/getPetitionByline';
import getPetitionWinning from 'selectors/petitionWinning';
import getPetitionResponse from 'selectors/petitionResponse';
import getPetitionMetrics from 'selectors/petitionMetrics';
import getPetitionProgress from 'selectors/petitionProgress';
import getPetitionImage from 'selectors/petitionImage';
import getPetitionURL from 'helpers/getPetitionURL';

export default (petition) => {
  const metrics = getPetitionMetrics(petition);
  return {
    id: petition.id,
    title: petition.title,
    link: getPetitionURL(petition.id),
    byline: getPetitionByline(petition),
    image: getPetitionImage(petition),
    stats: {
      total: metrics.supportersMetric.figure,
      required: metrics.supportersMetric.total,
      daysLeft: metrics.timeMetric.figure
    },
    progress: getPetitionProgress(petition),
    tags: {
      winner: getPetitionWinning(petition),
      response: getPetitionResponse(petition)
    }
  };
};
