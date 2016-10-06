import getPersisted from './petitionPersisted';
import getPublished from './petitionPublished';
import petitionCity from './petitionCity';

export default (petition = {}) => ({
  ...petition,
  city: petitionCity(petition),
  persisted: getPersisted(petition),
  published: getPublished(petition)
});
