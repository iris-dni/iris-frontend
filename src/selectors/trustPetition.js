import getPetitionSupportable from 'selectors/petitionSupportable';
import getPublished from 'selectors/petitionPublished';

export default (petition = {}) => ({
  id: petition.id,
  title: petition.title,
  hasSaved: petition.saved,
  isOwned: petition.owned,
  isPublished: getPublished(petition),
  isSupportable: getPetitionSupportable(petition)
});
