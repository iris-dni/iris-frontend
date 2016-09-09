import calculateParamOffset from 'helpers/calculateParamOffset';
import sanitizeParamLimit from 'helpers/sanitizeParamLimit';

export default ({ limit, page, city }) => {
  const saneLimit = sanitizeParamLimit(limit);

  const params = {
    resolve: 'city,owner',
    sort: '-created',
    offset: calculateParamOffset(page, saneLimit),
    limit: saneLimit,
    state: [
      'supportable.active',
      'supportable.winner',
      'loser',
      'processing.*',
      'closed'
    ].join(',')
  };

  if (city) {
    params.city = city;
  }

  return params;
};
