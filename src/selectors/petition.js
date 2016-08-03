import getPetitionDateRange from './petitionDateRange';
import calculatePercentage from 'helpers/calculatePercentage';
import getPetitionDaysRemaining from './petitionDaysRemaining';

export default (petition) => ({
  id: petition.id,
  header: {
    title: petition.title,
    percentComplete: calculatePercentage(petition.supporters),
    info: {
      city: petition.city,
      dateRange: getPetitionDateRange(petition.dc)
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
    daysRemaining: getPetitionDaysRemaining(petition.dc)
  }
});
