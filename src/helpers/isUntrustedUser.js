export default (response = {}) => {
  return response.reasons &&
    response.reasons[0] === 'mobile_untrusted';
};
