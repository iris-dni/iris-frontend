import getPetitionDateRange from 'helpers/getPetitionDateRange';
import petitionOwner from './petitionOwner';
import petitionCity from './petitionCity';

export default (petition = {}) => ({
  owner: petitionOwner(petition),
  city: petitionCity(petition),
  dateRange: getPetitionDateRange(petition)
});
