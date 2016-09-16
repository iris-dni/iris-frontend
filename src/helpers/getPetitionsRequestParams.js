import calculateParamOffset from 'helpers/calculateParamOffset';
import sanitizeParamLimit from 'helpers/sanitizeParamLimit';

export default ({ limit, page, city, sort }) => {
  const saneLimit = sanitizeParamLimit(limit);

  if (sort === 'supporters') {
    sort = '-supporters.amount';
  } else {
    sort = '-created';
  }

  const params = {
    resolve: 'city,owner',
    offset: calculateParamOffset(page, saneLimit),
    limit: saneLimit,
    sort,
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
