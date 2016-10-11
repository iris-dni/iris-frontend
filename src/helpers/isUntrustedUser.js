export default (response = {}) => response.reasons &&
  response.reasons.indexOf('mobile_untrusted') > -1 || false;
