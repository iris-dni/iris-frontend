export default (API_URL = '', requestPath = '') => {
  // Remove trailing slash from api url
  const sanitizedApiUrl = API_URL.replace(/\/$/, '');
  // Remove starting slash from request path
  const sanitizedRequestPath = requestPath.replace(/^\//, '');
  // Create URL, joined with a slash
  return [sanitizedApiUrl, sanitizedRequestPath].join('/');
};
