import getPetitionDateRange from './petitionDateRange';
import calculatePercentage from 'helpers/calculatePercentage';
import getPetitionDaysRemaining from './petitionDaysRemaining';
import getPetitionSchema from './petitionSchema';

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
        city: petition.city || 'Aargau',
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
      daysRemaining: getPetitionDaysRemaining(petition.dc || {})
    }
  };
};
