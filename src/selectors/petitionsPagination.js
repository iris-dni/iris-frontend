import settings from 'settings';

export default (petitions = {}) => {
  const { total, params, currentCity, data } = petitions;
  const { page, limit } = params || {};

  const showingLimit = limit || settings.petitionsPerPage;
  const currentPage = page || 1;
  const totalPages = Math.ceil(total / showingLimit);

  return {
    currentQuery: petitions.qs || '',
    showingCount: data.length || 0,
    totalCount: total,
    currentPage: currentPage,
    totalPages: totalPages,
    prevPage: Math.max(currentPage - 1, 1),
    nextPage: Math.min(currentPage + 1, totalPages),
    isFirstPage: currentPage <= 1,
    isLastPage: currentPage >= totalPages,
    params,
    currentCity
  };
};
