export default (prefix = '', requestPath = '') => {
  // Remove trailing slash from api url
  const sanitizedApiUrl = prefix.replace(/\/$/, '');
  // Remove starting slash from request path
  const sanitizedRequestPath = requestPath.replace(/^\//, '');
  // Create URL, joined with a slash
  return [sanitizedApiUrl, sanitizedRequestPath].join('/');
};
