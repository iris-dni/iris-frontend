import getPetitionEndDate from 'helpers/getPetitionEndDate';
import petitionOwner from './petitionOwner';
import petitionCity from './petitionCity';

export default (petition = {}) => ({
  owner: petitionOwner(petition),
  city: petitionCity(petition),
  ending: getPetitionEndDate(petition)
});
