import getPetitionURL from 'helpers/getPetitionURL';
import facebookShare from 'helpers/sharing/facebookShare';
import twitterShare from 'helpers/sharing/twitterShare';
import whatsappShare from 'helpers/sharing/whatsappShare';
import emailShare from 'helpers/sharing/emailShare';
import getPetitionTweetText from 'helpers/sharing/getPetitionTweetText';
import getPetitionEmailSubject from 'helpers/sharing/getPetitionEmailSubject';
import getPetitionEmailBody from 'helpers/sharing/getPetitionEmailBody';

export default (petition = {}) => ([
  facebookShare(getPetitionURL(petition.id)),
  twitterShare({
    url: getPetitionURL(petition.id),
    text: getPetitionTweetText(petition)
  }),
  whatsappShare(getPetitionURL(petition.id)),
  emailShare({
    url: getPetitionURL(petition.id),
    subject: getPetitionEmailSubject(petition),
    body: getPetitionEmailBody(petition)
  })
]);
