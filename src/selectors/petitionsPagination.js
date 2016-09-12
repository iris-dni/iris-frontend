export default (petitions = {}) => {
  const { total, params, data } = petitions;
  const { page, limit } = params;

  const totalPages = Math.ceil(total / limit);

  return {
    currentQuery: petitions.qs,
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
