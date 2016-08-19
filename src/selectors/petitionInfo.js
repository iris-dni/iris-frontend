import getPetitionDateRange from 'helpers/getPetitionDateRange';

export default (petition = {}) => {
  return {
    city: petition.city && petition.city.name,
    dateRange: getPetitionDateRange(petition)
  };
};
