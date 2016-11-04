import petitionCity from './petitionCity';
import getPersisted from './petitionPersisted';
import getPublished from './petitionPublished';
import getOwned from './petitionOwned';
import getPetitionSupportable from 'selectors/petitionSupportable';
import wrapPetitionLinks from 'helpers/wrapPetitionLinks';

export default (petition = {}) => ({
  ...petition,
  links: wrapPetitionLinks(petition.links),
  city: petitionCity(petition),
  persisted: getPersisted(petition),
  published: getPublished(petition),
  supportable: getPetitionSupportable(petition),
  owned: getOwned(petition)
});
