const cityLabel = (city = {}) => {
  return [city.zips && city.zips[0], city.name]
    .filter((str) => !!str)
    .join(' ');
};

export default (petition = {}) => {
  const city = petition.city && petition.city.data;

  return {
    ...city,
    label: cityLabel(city)
  };
};
