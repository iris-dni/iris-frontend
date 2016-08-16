import getPetitionDateRange from './petitionDateRange';
import calculatePercentage from 'helpers/calculatePercentage';
import getPetitionSchema from './petitionSchema';
import getPetitionMetrics from './petitionMetrics';

export default (petition) => {
  if (!petition || !petition.id) {
    return {};
  }

  return {
    id: petition.id,
    browserTitle: petition.title,
    schema: getPetitionSchema(petition),
    header: {
      title: petition.title,
      percentComplete: calculatePercentage(
        petition.supporters.amount,
        petition.supporters.required
      ),
      info: {
        city: petition.city,
        dateRange: getPetitionDateRange(petition.dc || {})
      },
      supporters: {
        total: petition.supporters.amount,
        required: petition.supporters.required
      }
    },
    body: {
      description: petition.description,
      suggestedSolution: petition.suggested_solution
    },
    sidebar: {
      metrics: getPetitionMetrics(petition)
    }
  };
};
