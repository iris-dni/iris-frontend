const baseUrl = () => {
  if (!process.env.BASE_URL) {
    throw new Error('Please define a BASE_URL in .env');
  }

  return process.env.BASE_URL;
};

export default (url, pathname, search) => {
  const delimiter = url.indexOf('?') < 0 ? '?' : '&';
  const returnUrl = encodeURIComponent(
    `${baseUrl()}${pathname}${search ? decodeURIComponent(search) : ''}`
  );
  return `${url}${delimiter}irisreturl=${returnUrl}`;
};
