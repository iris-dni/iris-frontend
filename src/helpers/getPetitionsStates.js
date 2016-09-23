const PETITIONS_STATES = {
  current: ['supportable.active', 'supportable.winner'],
  winning: ['supportable.winner', 'processing.*', 'closed'],
  past: ['processing.*', 'closed', 'loser'],
  all: [
    'supportable.winner',
    'supportable.active',
    'processing.*',
    'closed',
    'loser'
  ],
  default: [
    'supportable.active',
    'supportable.winner',
    'loser',
    'processing.*',
    'closed'
  ]
};

export default (state) => (
  PETITIONS_STATES[state || 'default'].join(',')
);
