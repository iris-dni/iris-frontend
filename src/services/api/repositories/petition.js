import ApiClient from 'services/api/client';
import getRequestParams from 'helpers/getPetitionsRequestParams';
import path from 'path';

export default {
  /**
   * Find a single petition
   */
  find: (id) => {
    const requestPath = path.join('/petitions', id.toString());
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
