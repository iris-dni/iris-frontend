import settings from 'settings';
import getPetitionURL from 'helpers/getPetitionURL';

export const generateMailToLink = (params) => {
  console.log(params);
  const { mailto, subject, body } = params;

  const target = 'mailto:__MAILTO__?subject=__SUBJECT__&body=__BODY__'
    .replace('__MAILTO__', (mailto || ''))
    .replace('__SUBJECT__', (subject || ''))
    .replace('__BODY__', (body || ''));

  return encodeURI(target);
};

export const facebookShareButton = (url) => ({
  popup: true,
  href: encodeURI(
    'http://www.facebook.com/sharer/sharer.php' +
      '?u=' + url
  ),
  brand: 'facebook',
  icon: 'Facebook',
  label: settings.shareButtons.facebook.label
});

export const twitterShareButton = ({ url, text }) => ({
  popup: true,
  href: encodeURI(
    'http://www.twitter.com/share' +
      '?url=' + url +
      '&text=' + text
  ),
  brand: 'twitter',
  icon: 'Twitter',
  label: settings.shareButtons.twitter.label
});

export const whatsappShareButton = (url) => ({
  href: encodeURI(
    'whatsapp://send' +
      '?text=' + url
  ),
  brand: 'whatsapp',
  icon: 'Whatsapp',
  label: settings.shareButtons.whatsapp.label
});

export const emailShareButton = ({ url, subject, body }) => ({
  href: generateMailToLink({
    mailto: '',
    subject,
    body: `${body} \r\n\r\n ${url}`
  }),
  brand: 'email',
  icon: 'Email',
  label: settings.shareButtons.email.label
});

export default (petitionID) => ([
  facebookShareButton(getPetitionURL(petitionID)),
  twitterShareButton({
    url: getPetitionURL(petitionID),
    text: settings.shareButtons.twitter.tweetText
  }),
  whatsappShareButton(getPetitionURL(petitionID)),
  emailShareButton({
    url: getPetitionURL(petitionID),
    subject: settings.shareButtons.email.subject,
    body: settings.shareButtons.email.body
  })
]);
