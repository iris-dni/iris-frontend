import ApiClient, { POST } from 'services/api/client';

export default {
  check: (url) => {
    const requestPath = '/og/check';
    const requestParams = { url };
    return ApiClient.request(requestPath, requestParams, POST);
  }
};
