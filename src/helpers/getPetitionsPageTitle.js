import settings from 'settings';

const getSort = (sort) => {
  switch (sort) {
    case 'supporters':
      return settings.petitionsPage.mostSupported;
    case 'date':
      return settings.petitionsPage.mostRecent;
    default:
      return '';
  }
};

const getState = (state) => {
  switch (state) {
    case 'running':
      return settings.petitionsPage.running;
    case 'winning':
      return settings.petitionsPage.winning;
    case 'all':
    default:
      return '';
  }
};

export default ({ currentCity, params }) => {
  const city = currentCity && currentCity.name;
  const sort = params && getSort(params.sort);
  const state = params && getState(params.state);

  let title = settings.petitionsPage.title;

  title = (sort ? title.replace('%x', sort) : title.replace('%x', ''));
  title = (state ? title.replace('%y', state) : title.replace('%y', ''));
  title = (city ? title.replace('%z', `in ${city}`) : title.replace('%z', ''));

  // Replaces any potential double space with a single one.
  title = title.trim().replace(/\s{2,}/g, ' ');

  return title;
};
