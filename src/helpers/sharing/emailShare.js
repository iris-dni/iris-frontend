import settings from 'settings';
import generateMailTo from './generateMailTo';

export default ({ url, subject, body }) => ({
  href: generateMailTo({
    mailto: '',
    subject,
    body: `${body} \r\n\r\n ${url}`
  }),
  brand: 'email',
  icon: 'Email',
  label: settings.shareButtons.email.label
});
