import getPetitionDateRange from 'helpers/getPetitionDateRange';
import petitionCity from './petitionCity';

export default (petition = {}) => {
  return {
    city: petitionCity(petition),
    dateRange: getPetitionDateRange(petition)
  };
};
