export default (showingCount, totalCount, params = {}) => {
  const { page, limit } = params;
  const totalPages = Math.ceil(totalCount / limit);
  return {
    limit: limit,
    showingCount: showingCount,
    totalCount: totalCount,
    currentPage: page,
    totalPages: totalPages,
    prevPage: Math.max(page - 1, 1),
    nextPage: Math.min(page + 1, totalPages),
    isFirstPage: page <= 1,
    isLastPage: page >= totalPages
  };
};
