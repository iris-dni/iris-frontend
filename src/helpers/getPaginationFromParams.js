export default (showing, total, params = {}) => {
  const { page, limit } = params;
  return {
    showing: showing,
    limit: limit,
    total: total,
    pages: page,
    currentPage: Math.ceil(showing / limit),
    isFirstPage: page <= 1
  };
};
