const PETITIONS_STATES = {
  current: [
    'supportable.active',
    'supportable.winner'
  ],
  winning: [
    'supportable.winner',
    'processing.*',
    'closed',
    'closedWithoutResponse'
  ],
  past: [
    'processing.*',
    'loser',
    'closed',
    'closedWithoutResponse'
  ],
  all: [
    'supportable.winner',
    'supportable.active',
    'processing.*',
    'loser',
    'closed',
    'closedWithoutResponse'
  ],
  default: [
    'supportable.active',
    'supportable.winner',
    'processing.*',
    'loser',
    'closed',
    'closedWithoutResponse'
  ]
};

export default (state) => (
  PETITIONS_STATES[state || 'default'].join(',')
);
