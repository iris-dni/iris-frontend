// export default (showingCount, totalCount, params = {}) => {
export default (state) => {
  const { total, params, data } = state;
  const { page, limit } = params;

  const totalPages = Math.ceil(total / limit);

  return {
    currentQuery: state.qs,
    limit: limit,
    showingCount: data.length,
    totalCount: total,
    currentPage: page,
    totalPages: totalPages,
    prevPage: Math.max(page - 1, 1),
    nextPage: Math.min(page + 1, totalPages),
    isFirstPage: page <= 1,
    isLastPage: page >= totalPages
  };
};
