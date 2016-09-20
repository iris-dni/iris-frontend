import encodeParams from './encodeParams';
import parameterize from './parameterize';

export const petitionsPath = (options = {}) => {
  const { state, city, page, limit, sort } = options || {};
  const queryString = encodeParams({ limit, sort });

  let path = '/petitions';

  path += city ? `/in/${parameterize(city.name || '')}-${city.id}` : '';
  path += state ? `/s/${parameterize(state || '')}` : '';
  path += page ? `/page/${page}` : '';
  path += queryString ? `?${queryString}` : '';

  return path;
};
