import encodeParams from './encodeParams';
import parameterize from './parameterize';
import baseUrl from 'helpers/baseUrl';
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

export const petitionsByCityPath = (options = {}) => {
  const { city } = options || {};

  let path = '/petitions';

  if (city && city.id) {
    path += `/${parameterize(city.name || '')}-${city.id}`;
  }

  return path;
};

export const petitionPath = (options = {}) => {
  const { id, responseAnchor } = options || {};
  let path = '';

  if (id) {
    path += `/petitions/${id}`;
  }

  if (responseAnchor) {
    path += '#response';
  }

  return path;
};

export const petitionUrl = (options = {}) => {
  return baseUrl(petitionPath(options));
};

export const respondToPetitionPath = (options = {}) => {
  const { token } = options || {};

  if (token) {
    return `/respond/${token}`;
  }
};

export const respondToPetitionUrl = (options = {}) => {
  return baseUrl(respondToPetitionPath(options));
};
