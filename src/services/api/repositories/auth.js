import ApiClient from 'services/api/client';

export default {
  /**
   * Fetch the current user's data
   */
  whoAmI: () => {
    return ApiClient.request('/auth/whoami').then(response => {
      return response.data;
    });
  }
};
