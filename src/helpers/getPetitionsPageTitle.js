import settings from 'settings';

const getState = (state) => {
  switch (state) {
    case 'winning':
      return settings.petitionsPage.winning;
    case 'past':
      return settings.petitionsPage.past;
    case 'all':
      return '';
    case 'running':
    default:
      return settings.petitionsPage.running;
  }
};

export default ({ currentCity, params }) => {
  const state = params && getState(params.state);
  const city = currentCity && currentCity.name;
  let title = settings.petitionsPage.title;

  title = (state ? title.replace('%x', state) : title.replace('%x', ''));
  title = (city ? title.replace('%y', `in ${city}`) : title.replace('%y', ''));

  // Replaces any potential double space with a single one.
  title = title.trim().replace(/\s{2,}/g, ' ');

  return title;
};
