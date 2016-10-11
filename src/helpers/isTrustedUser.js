export default (response = {}) => {
  return response.reasons &&
    response.reasons.indexOf('mobile_untrusted') === 0 || false;
};
