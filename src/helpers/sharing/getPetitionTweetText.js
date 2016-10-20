import getPetitionCity from 'selectors/petitionCity';
import settings from 'settings';

export default (petition = {}) => {
  const city = getPetitionCity(petition).label;
  return city
    ? settings.shareButtons.twitter.localisedTweetText.replace('%s', city)
    : settings.shareButtons.twitter.tweetText;
};
