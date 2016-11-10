import getPetitionCity from 'selectors/petitionCity';
import settings from 'settings';

export default (petition = {}, modalType = 'share') => {
  const city = getPetitionCity(petition).label;
  return city
    ? settings.shareButtons.twitter[modalType].localisedTweetText.replace('%s', city)
    : settings.shareButtons.twitter[modalType].tweetText;
};
