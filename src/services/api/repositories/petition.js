import ApiClient from 'services/api/client';
import path from 'path';

export default {

  /**
   * Find a single petition
   */
  find: (id) => {
    return ApiClient.request(path.join('/petitions', id));
  }
}
