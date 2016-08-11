import ApiClient from 'services/api/client';
import getRequestParams from 'helpers/getPetitionsRequestParams';
import path from 'path';

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

    console.log(requestPath, requestParams);

    return ApiClient.request(requestPath, requestParams);
  }
};
