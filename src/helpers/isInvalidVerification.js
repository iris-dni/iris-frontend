export default (response = {}) => response.reasons &&
  response.reasons.indexOf('mobile_verification_failed') > -1 || false;
