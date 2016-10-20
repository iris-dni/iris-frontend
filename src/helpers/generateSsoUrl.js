import baseUrl from 'helpers/baseUrl';

export default (ssoUrl, returnUrl) => {
  const delimiter = ssoUrl.indexOf('?') < 0 ? '?' : '&';
  const irisRetUrl = encodeURIComponent([baseUrl(), returnUrl].join(''));

  return [
    ssoUrl,
    delimiter,
    'irisreturl=',
    irisRetUrl
  ].join('');
};
