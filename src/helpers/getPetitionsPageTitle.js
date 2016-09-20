import settings from 'settings';

export default (currentCity = {}) => {
  return currentCity.name
    ? `${settings.petitionsPage.titleLocalized} ${currentCity.name}`
    : settings.petitionsPage.title;
};
