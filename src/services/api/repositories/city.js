import ApiClient from 'services/api/client';

export default {
  all: () => {
    const requestPath = '/cities';
    return ApiClient.request(requestPath);
  },

  search: (term) => {
    const requestPath = '/cities';
    const requestParams = { ft: term, sort: 'score' };

    return ApiClient.request(requestPath, requestParams);
  }
};
