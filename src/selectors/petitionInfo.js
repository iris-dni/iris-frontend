import getPetitionDateRange from 'helpers/getPetitionDateRange';

export default (petition = {}) => {
  return {
    city: petition.city,
    dateRange: getPetitionDateRange(petition)
  };
};
