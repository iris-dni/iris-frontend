import settings from 'settings';

const getState = (state) => {
  switch (state) {
    case 'winning':
      return settings.petitionsPage.winning;
    case 'all':
      return '';
    case 'running':
    default:
      return settings.petitionsPage.running;
  }
};

export default ({ currentCity, params }) => {
  const city = currentCity && currentCity.name;
  const state = params && getState(params.state);

  let title = settings.petitionsPage.title;

  title = (state ? title.replace('%x', state) : title.replace('%x', ''));
  title = (city ? title.replace('%y', `in ${city}`) : title.replace('%y', ''));

  // Replaces any potential double space with a single one.
  title = title.trim().replace(/\s{2,}/g, ' ');

  return title;
};
