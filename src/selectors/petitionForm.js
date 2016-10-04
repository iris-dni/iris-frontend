import getPersisted from './petitionPersisted';
import getPublished from './petitionPublished';

export default (petition = {}) => ({
  ...petition,
  persisted: getPersisted(petition),
  published: getPublished(petition)
});
