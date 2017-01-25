import getPetitionCity from 'selectors/petitionCity';
import settings from 'settings';

export default (petition = {}, modalType = 'share') => {
  const city = getPetitionCity(petition).label;
  return [
    city
      ? settings.shareButtons.email[modalType].localisedBody.replace('%s', city)
      : settings.shareButtons.email[modalType].body,
    petition.title
  ].join('\r\n\r\n');
};
