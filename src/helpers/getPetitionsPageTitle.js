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

export default ({ currentCity, params }) => {
  const city = currentCity && currentCity.name;
  const sort = params && getSort(params.sort);

  let title = settings.petitionsPage.title;

  title = (city ? title.replace('%y', `in ${city}`) : title.replace('%y', ''));
  title = (sort ? title.replace('%x', sort) : title.replace('%x', ''));

  // Replaces any potential double space with a single one.
  title = title.trim().replace(/\s{2,}/g, ' ');

  return title;
};
