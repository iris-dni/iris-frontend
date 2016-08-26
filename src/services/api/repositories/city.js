import ApiClient from 'services/api/client';

export default {
  all: () => {
    const requestPath = '/cities';
    return ApiClient.request(requestPath);
  },

  search: (query) => {
    const requestPath = '/cities';
    const requestParams = { ft: query, sort: 'score' };

    return ApiClient.request(requestPath, requestParams);
  }
};
