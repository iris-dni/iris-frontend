import calculateParamOffset from 'helpers/calculateParamOffset';
import sanitizeParamLimit from 'helpers/sanitizeParamLimit';
import getPetitionsStates from 'helpers/getPetitionsStates';

export default ({ limit, page, city, sort, state }) => {
  const saneLimit = sanitizeParamLimit(limit);

  sort = (sort === 'supporters') ? '-supporters.amount' : '-created';
  state = getPetitionsStates(state);

  const params = {
    resolve: 'city,owner',
    offset: calculateParamOffset(page, saneLimit),
    limit: saneLimit,
    city: city || '',
    state,
    sort
  };

  return params;
};
