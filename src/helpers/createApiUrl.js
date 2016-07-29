export default (API_URL = '', requestPath = '') => {
  // Remove trailing slash if given
  const sanitizedApiUrl = API_URL.replace(/\/$/, '');
  // Remove starting starting slash from request path
  const sanitizedRequestPath = requestPath.replace(/^\//, '');
  // Return URL joined with a slash
  return [sanitizedApiUrl, sanitizedRequestPath].join('/');
};
