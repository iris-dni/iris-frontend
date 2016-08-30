export default (ssoUrl, returnUrl) => {
  if (!process.env.BASE_URL) {
    throw new Error('Please define a BASE_URL in .env');
  }

  const baseUrl = process.env.BASE_URL;
  const delimiter = ssoUrl.indexOf('?') < 0 ? '?' : '&';
  const irisRetUrl = encodeURIComponent([baseUrl, returnUrl].join(''));

  return [
    ssoUrl,
    delimiter,
    'irisreturl=',
    irisRetUrl
  ].join('');
};
