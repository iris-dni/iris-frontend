export default (showingCount, totalCount, params = {}) => {
  const { page, limit } = params;
  const totalPages = Math.ceil(totalCount / limit);
  return {
    limit: limit,
    showingCount: showingCount,
    totalCount: totalCount,
    currentPage: page,
    totalPages: totalPages,
    isFirstPage: page <= 1,
    isLastPage: page >= totalPages
  };
};
