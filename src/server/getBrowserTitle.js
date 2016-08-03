import settings from 'settings';

export const TITLE_TEMPLATE = `%s | ${settings.title}`;

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
    : settings.title;
};
