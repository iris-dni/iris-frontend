import ApiClient from 'services/api/client';
import path from 'path';

const getRequestParams = (options) => {
  console.log(options);
  const limit = options.per || 5;
  const offset = (options.page - 1) * limit || 0;

  return {
    offset: offset,
    limit: limit
  };
};

export default {
  /**
   * Find a single petition
   */
  find: (id) => {
    const requestPath = path.join('/petitions', id);
    return ApiClient.request(requestPath);
  },

  /**
   * Get all petitions
   */
  all: (options = {}) => {
    const requestPath = '/petitions';
    const requestParams = getRequestParams(options);
    return ApiClient.request(requestPath, requestParams);
  }
};
