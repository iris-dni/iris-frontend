import getPetitionCity from 'selectors/petitionCity';
import settings from 'settings';

export default (petition = {}, modalType = 'share') => {
  const city = getPetitionCity(petition).label;
  return city
    ? settings.shareButtons.email[modalType].localisedSubject.replace('%s', city)
    : settings.shareButtons.email[modalType].subject;
};
