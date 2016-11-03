import path from 'path';

const stripTrailingSlash = (string = '') => {
  return string.replace(/\/$/, '');
};

const sanitizePath = (pathname = '') => {
  return path.isAbsolute(pathname) ? pathname : `/${pathname}`;
};

export default (pathname) => {
  if (!process.env.BASE_URL) {
    throw new Error('Please define a BASE_URL in .env');
  }

  if (!pathname) {
    return stripTrailingSlash(process.env.BASE_URL);
  }

  return stripTrailingSlash(process.env.BASE_URL) + sanitizePath(pathname);
};
