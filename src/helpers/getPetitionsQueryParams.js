export default (params = {}, query = {}) => ({
  page: parseInt(params.page || query.page || 1),
  city: params.city || '',
  cityName: params.cityName || '',
  limit: parseInt(query.limit || 12)
});
