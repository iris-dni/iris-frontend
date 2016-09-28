import settings from 'settings';
import getPetitionURL from 'helpers/getPetitionURL';
import facebookShare from 'helpers/sharing/facebookShare';
import twitterShare from 'helpers/sharing/twitterShare';
import whatsappShare from 'helpers/sharing/whatsappShare';
import emailShare from 'helpers/sharing/emailShare';

export default (petitionID) => ([
  facebookShare(getPetitionURL(petitionID)),
  twitterShare({
    url: getPetitionURL(petitionID),
    text: settings.shareButtons.twitter.tweetText
  }),
  whatsappShare(getPetitionURL(petitionID)),
  emailShare({
    url: getPetitionURL(petitionID),
    subject: settings.shareButtons.email.subject,
    body: settings.shareButtons.email.body
  })
]);
