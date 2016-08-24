import ApiClient from 'services/api/client';

export default {
  all: () => {
    const requestPath = '/cities';
    return ApiClient.request(requestPath);
  }
};
