import getPetitionSupportable from 'selectors/petitionSupportable';

export default (petition = {}) => ({
  id: petition.id,
  title: petition.title,
  isSupportable: getPetitionSupportable(petition)
});
