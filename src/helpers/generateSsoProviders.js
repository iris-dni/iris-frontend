import { ssoProviders } from 'settings';
import generateSsoUrl from './generateSsoUrl';

export default (location) => {
  return (ssoProviders || []).map(provider => {
    return {
      text: provider.text,
      url: generateSsoUrl(
        provider.url,
        location.pathname,
        location.search
      )
    };
  });
};
