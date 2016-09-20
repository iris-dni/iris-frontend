import encodeParams from './encodeParams';
import parameterize from './parameterize';

export const petitionsPath = (options = {}) => {
  const { city, page, limit, sort } = options || {};
  const queryString = encodeParams({ page, limit, sort });

  let path = '/petitions';

  if (city && city.id) {
    path += `/${parameterize(city.name || '')}-${city.id}`;
  }

  if (queryString) {
    path += `?${queryString}`;
  }

  return path;
};
