import settings from 'settings';
import getPetitionProcessing from 'selectors/petitionProcessing';

export default (petition = {}) => {
  const petitionProcessing = getPetitionProcessing(petition);
  return settings.petitionResponseStatus[petitionProcessing ? 'pending' : 'arrived'].title;
};
