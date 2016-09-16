import calculateParamOffset from 'helpers/calculateParamOffset';
import sanitizeParamLimit from 'helpers/sanitizeParamLimit';

export default ({ limit, page, city, sort, state }) => {
  const saneLimit = sanitizeParamLimit(limit);

  if (sort === 'supporters') {
    sort = '-supporters.amount';
  } else {
    sort = '-created';
  }

  if (state === 'running') {
    state = ['supportable.active', 'supportable.winner'].join(',');
  } else if (state === 'winning') {
    state = ['supportable.winner', 'processing.*', 'closed'].join(',');
  } else if (state === 'all') {
    state = [
      'supportable.winner',
      'supportable.active',
      'processing.*',
      'closed',
      'loser'
    ].join(',');
  } else {
    state = [
      'supportable.active',
      'supportable.winner',
      'loser',
      'processing.*',
      'closed'
    ].join();
  }

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
