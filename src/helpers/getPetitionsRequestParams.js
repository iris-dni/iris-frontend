import calculateParamOffset from 'helpers/calculateParamOffset';
import sanitizeParamLimit from 'helpers/sanitizeParamLimit';

export default ({ limit, page }) => {
  const saneLimit = sanitizeParamLimit(limit);

  return {
    offset: calculateParamOffset(page, saneLimit),
    limit: saneLimit
  };
};
