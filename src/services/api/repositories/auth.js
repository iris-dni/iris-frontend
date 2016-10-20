import ApiClient, { POST } from 'services/api/client';

/**
 * Fetch the current user's data
 */
export const whoAmI = () => {
  return ApiClient.request('/auth/whoami');
};

/**
 * Logout the current user
 */
export const logout = () => {
  return ApiClient.request('/auth/logout', null, POST);
};

export default { whoAmI, logout };
