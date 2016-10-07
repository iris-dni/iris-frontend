export default (response = {}) => {
  return response.reasons[0] === 'mobile_untrusted';
};
