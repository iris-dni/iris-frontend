import ApiClient from 'services/api/client';

export default {
  all: () => {
    const requestPath = '/cities';
    return ApiClient.request(requestPath);
  },

  search: (query, limit) => {
    const requestPath = '/cities';
    const requestParams = { ft: query, limit: limit, sort: 'score' };

    return ApiClient.request(requestPath, requestParams);
  }
};
