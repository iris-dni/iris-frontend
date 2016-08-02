import config from 'config';

export const TITLE_TEMPLATE = `%s | ${config.title}`;

export default (location = {}, state = {}) => {
  let titlePrefix;

  const { pathname } = location;

  // Petitions route
  if (pathname && pathname.indexOf('/petitions') > -1) {
    const { petition } = state;
    titlePrefix = petition && petition.title;
  }

  return titlePrefix
    ? TITLE_TEMPLATE.replace('%s', titlePrefix)
    : config.title;
};
