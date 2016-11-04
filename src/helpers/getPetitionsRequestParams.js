import calculateParamOffset from 'helpers/calculateParamOffset';
import sanitizeParamLimit from 'helpers/sanitizeParamLimit';
import getPetitionsStates from 'helpers/getPetitionsStates';
import getPetitionsSortParam from 'helpers/getPetitionsSortParam';

export default ({ limit, page, city, sort, state }) => {
  const saneLimit = sanitizeParamLimit(limit);

  return {
    resolve: 'city,owner,images',
    offset: calculateParamOffset(page, saneLimit),
    limit: saneLimit,
    city: city || '',
    state: getPetitionsStates(state),
    sort: getPetitionsSortParam(sort)
  };
};
