import sanitizeParamLimit from 'helpers/sanitizeParamLimit';

export default (page, limit) => {
  const sanePage = Math.max(page, 1);
  const saneLimit = sanitizeParamLimit(limit);
  const returnedLimit = (sanePage - 1) * saneLimit;
  return Math.max(returnedLimit, 0);
};
