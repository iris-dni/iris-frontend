export default (response = {}) => response.reasons &&
  response.reasons.indexOf('User already supports this petition') > -1 || false;
