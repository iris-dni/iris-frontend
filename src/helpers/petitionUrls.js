import encodeParams from './encodeParams';
import parameterize from './parameterize';

export const petitionsPath = (options = {}) => {
  const { state, city, page, limit, sort } = options || {};
  const queryString = encodeParams({ limit, sort, state });

  let path = '/petitions';

  path += city ? `/${parameterize(city.name || '')}-${city.id}` : '';
  path += page ? `/page/${page}` : '';
  path += queryString ? `?${queryString}` : '';

  return path;
};
