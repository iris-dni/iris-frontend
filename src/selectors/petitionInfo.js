import getPetitionDateRange from './petitionDateRange';

export default (petition = {}) => {
  return {
    city: petition.city,
    dateRange: getPetitionDateRange(petition)
  };
};
