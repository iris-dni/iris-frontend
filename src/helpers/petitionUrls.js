import encodeParams from './encodeParams';
import parameterize from './parameterize';
import settings from 'settings';

export const petitionsPath = (options = {}) => {
  const { state, city, page, limit, sort } = options || {};
  const queryString = encodeParams({
    limit: (limit !== settings.petitionsPerPage ? limit : {}),
    sort,
    state
  });

  let path = '/petitions';

  if (city && city.id) {
    path += `/${parameterize(city.name || '')}-${city.id}`;
  }

  if (page) {
    path += `/page/${page}`;
  }

  if (queryString) {
    path += `?${queryString}`;
  }

  return path;
};
