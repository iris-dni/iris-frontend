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

export const petitionPath = (options = {}) => {
  const { id } = options || {};

  if (id) {
    return `/petitions/${id}`;
  }
};

export const petitionUrl = (options = {}) => {
  return [baseUrl(), petitionPath(options)].join('');
};

export const respondToPetitionPath = (options = {}) => {
  const { token } = options || {};

  if (token) {
    return `/respond/${token}`;
  }
};

export const respondToPetitionUrl = (options = {}) => {
  return [baseUrl(), respondToPetitionPath(options)].join('');
};
