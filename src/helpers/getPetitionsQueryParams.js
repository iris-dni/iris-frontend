export default (params, query) => ({
  page: parseInt(params && params.page || query && query.page || 1),
  city: params && params.city || '',
  cityName: params && params.cityName || '',
  limit: parseInt(query && query.limit || 12)
});
