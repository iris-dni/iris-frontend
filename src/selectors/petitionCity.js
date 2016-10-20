const cityLabel = (city) => {
  return city ? `${city.zips[0]} ${city.name}` : '';
};

export default (petition = {}) => {
  const city = petition.city && petition.city.data;

  return { ...city, label: cityLabel(city) };
};
