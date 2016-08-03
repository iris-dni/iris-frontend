import getPetitionDateRange from './petitionDateRange';

export default (petition) => ({
  id: petition.id,
  title: petition.title,
  city: petition.city,
  dateRange: getPetitionDateRange(petition.dc),
  description: petition.description,
  suggestedSolution: petition.suggested_solution
});
