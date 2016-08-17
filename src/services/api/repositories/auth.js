import ApiClient from 'services/api/client';

export default {
  /**
   * Fetch the current user's data
   */
  whoAmI: () => {
    return ApiClient.request('/auth/whoami');
  },

  /**
   * Logout the current user
   */
  logout: () => {
    return ApiClient.request('/auth/logout', null, 'POST');
  }
};
