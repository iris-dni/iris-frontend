export default (params, query) => ({
  page: parseInt(params && params.page || query.page || 1),
  city: params && params.city || query.city || '',
  cityName: params && params.cityName || query.cityName || '',
  limit: parseInt(query.limit || 12)
});
