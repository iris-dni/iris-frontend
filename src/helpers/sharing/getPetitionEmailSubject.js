import getPetitionCity from 'selectors/petitionCity';
import settings from 'settings';

export default (petition = {}) => {
  const city = getPetitionCity(petition).label;
  return city
    ? settings.shareButtons.email.localisedSubject.replace('%s', city)
    : settings.shareButtons.email.subject;
};
