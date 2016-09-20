export default (params, page, qs) => {
  let petitionsPath = '/petitions/';

  if (params.cityName && params.city) {
    petitionsPath += `${params.cityName}-${params.city}/`;
  }

  petitionsPath += `page/${page}${qs ? `?${qs}` : ''}`;

  return petitionsPath;
};
