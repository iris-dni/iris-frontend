import encodeParams from './encodeParams';
import parameterize from './parameterize';

export const petitionsPath = (options = {}) => {
  const { city, page, limit } = options || {};
  const queryString = encodeParams({ page, limit });

  let path = '/petitions';

  if (city) {
    path += `/${parameterize(city.name || '')}-${city.id}`;
  }

  if (queryString) {
    path += `?${queryString}`;
  }

  return path;
};
