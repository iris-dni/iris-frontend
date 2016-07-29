export default (API_URL = '', requestPath = '') => {
  // Remove trailing slash if given
  const sanitizedApiUrl = API_URL.replace(/\/$/, '');
  // Make sure request path has starting slash
  const sanitizedRequestPath = requestPath.replace(/^\//, '');
  // Return joined URL
  return [sanitizedApiUrl, sanitizedRequestPath].join('/');
};
