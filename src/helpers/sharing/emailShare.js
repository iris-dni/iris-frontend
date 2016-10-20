import settings from 'settings';
import mailToLink from './mailToLink';

export default ({ url, subject, body }) => ({
  href: mailToLink({
    mailto: '',
    subject,
    body: `${body || ''}${body && url ? ' \r\n\r\n ' : ''}${url || ''}`
  }),
  brand: 'email',
  icon: 'Email',
  label: settings.shareButtons.email.label
});
