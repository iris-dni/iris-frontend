import { ssoProviders } from 'settings';
import generateSsoUrl from './generateSsoUrl';

export default (returnUrl) => {
  return (ssoProviders || []).map(provider => ({
    text: provider.text,
    url: generateSsoUrl(
      provider.url,
      returnUrl
    )
  }));
};
