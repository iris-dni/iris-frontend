import ApiClient from 'services/api/client';
import path from 'path';

export default {
  /**
   * Find a single petition
   */
  find: (id) => {
    const requestPath = path.join('/petitions', id);
    return ApiClient.request(requestPath);
  }
};
