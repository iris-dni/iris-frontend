export default (petitions = {}) => {
  const { total, params, data } = petitions;
  const { page, limit } = params || {};

  const showingLimit = limit || 12;
  const currentPage = page || 1;
  const totalPages = Math.ceil(total / showingLimit);

  return {
    currentQuery: petitions.qs || '',
    limit: showingLimit,
    showingCount: data.length || 0,
    totalCount: total,
    currentPage: currentPage,
    totalPages: totalPages,
    prevPage: Math.max(currentPage - 1, 1),
    nextPage: Math.min(currentPage + 1, totalPages),
    isFirstPage: currentPage <= 1,
    isLastPage: currentPage >= totalPages
  };
};
