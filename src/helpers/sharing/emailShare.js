import settings from 'settings';
import generateMailToLink from './generateMailToLink';

export default ({ url, subject, body }) => ({
  href: generateMailToLink({
    mailto: '',
    subject,
    body: `${body} \r\n\r\n ${url}`
  }),
  brand: 'email',
  icon: 'Email',
  label: settings.shareButtons.email.label
});
