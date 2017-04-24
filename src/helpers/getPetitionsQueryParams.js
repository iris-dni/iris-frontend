export default (params = {}, query = {}) => ({
  page: parseInt(params.page || 1),
  city: params.city || '',
  cityName: params.cityName || '',
  limit: parseInt(query.limit || 12),
  state: query.state || 'running',
  sort: query['sort'] || ''
});
