import encodeParams from './encodeParams';
import parameterize from './parameterize';

export const petitionsPath = (options = {}) => {
  const { state, city, page, limit, sort } = options || {};
  const queryString = encodeParams({ page, limit, sort });

  let path = '/petitions';

  path += state ? `/${parameterize(state || '')}` : '';
  path += city ? `/${parameterize(city.name || '')}-${city.id}` : '';
  path += queryString ? `?${queryString}` : '';

  return path;
};
