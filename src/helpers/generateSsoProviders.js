import { ssoProviders } from 'settings';
import generateSsoUrl from 'helpers/generateSsoUrl';

export default (returnUrl) => {
  const defaultProvider = {
    text: process.env.SSO_PROVIDER_TEXT,
    url: process.env.SSO_PROVIDER_URL
  };

  return (ssoProviders || [])
    .concat(defaultProvider)
    .filter(provider => !!provider.text && !!provider.url)
    .map(provider => ({
      text: provider.text,
      url: generateSsoUrl(provider.url, returnUrl)
    }));
};
