import { ssoProviders } from 'settings';
import generateSsoUrl from './generateSsoUrl';

export default (location) => {
  return (ssoProviders || []).map(provider => ({
    text: provider.text,
    url: generateSsoUrl(
      provider.url,
      location.pathname,
      location.search
    )
  }));
};
