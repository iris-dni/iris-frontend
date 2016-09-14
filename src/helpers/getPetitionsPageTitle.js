import settings from 'settings';

export default (currentCity) => {
  const city = currentCity && currentCity.name;

  return city
    ? `${settings.petitionsPage.titleLocalized} ${city}`
    : settings.petitionsPage.title;
};
