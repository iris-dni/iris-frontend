import getPetitionCity from 'selectors/petitionCity';
import settings from 'settings';

export default (petition = {}) => {
  const city = getPetitionCity(petition).label;
  return [
    city
      ? settings.shareButtons.email.localisedBody.replace('%s', city)
      : settings.shareButtons.email.body,
    petition.title
  ].join('\r\n\r\n');
};
