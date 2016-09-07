export default (petition = {}) => {
  const city = petition.city && petition.city.data;
  return city ? `${city.name} - ${city.zips[0]}` : '';
};
