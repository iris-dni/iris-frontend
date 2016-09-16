export default (params, page, qs) => {
  var petitionsPath = '/petitions/';

  if (params.state) {
    petitionsPath += `${params.state}/`;
  }

  if (params.cityName && params.city) {
    petitionsPath += `${params.cityName}-${params.city}/`;
  }

  petitionsPath += `page/${page}${qs ? `?${qs}` : ''}`;

  return petitionsPath;
};
