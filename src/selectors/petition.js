import getPetitionDateRange from './petitionDateRange';
import getPetitionSchema from './petitionSchema';
import getPetitionMetrics from './petitionMetrics';

export default (petition) => {
  if (!petition || !petition.id) {
    return {};
  }

  const metrics = getPetitionMetrics(petition);

  return {
    id: petition.id,
    browserTitle: petition.title,
    schema: getPetitionSchema(petition),
    header: {
      title: petition.title,
      info: {
        city: petition.city,
        dateRange: getPetitionDateRange(petition.dc || {})
      },
      metrics: metrics
    },
    body: {
      description: petition.description,
      suggestedSolution: petition.suggested_solution
    },
    sidebar: {
      metrics: metrics
    }
  };
};
