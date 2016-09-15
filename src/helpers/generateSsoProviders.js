import generateSsoUrl from 'helpers/generateSsoUrl';

export default (providers, returnUrl) => {
  const defaultProvider = {
    text: process.env.SSO_PROVIDER_TEXT,
    url: process.env.SSO_PROVIDER_URL
  };

  return (providers || [])
    .concat(defaultProvider)
    .filter(provider => !!provider.text && !!provider.url)
    .map(provider => ({
      text: provider.text,
      url: generateSsoUrl(provider.url, returnUrl)
    }));
};
