const PETITIONS_STATES = {
  running: [
    'supportable.active',
    'supportable.winner'
  ],
  all: [
    'supportable.winner',
    'supportable.active',
    'processing.*',
    'loser',
    'closed',
    'closedWithoutResponse'
  ],
  answered: [
    'closed'
  ],
  unanswered: [
    'supportable.winner',
    'processing.noLetterResponse'
  ],
  default: [
    'supportable.active',
    'supportable.winner',
    'processing.*',
    'loser',
    'closed',
    'closedWithoutResponse'
  ],
  past: [
    'processing.*',
    'loser',
    'closed',
    'closedWithoutResponse'
  ],
  winning: [
    'supportable.winner',
    'processing.*',
    'closed',
    'closedWithoutResponse'
  ]
};

export default (state) => (
  PETITIONS_STATES[state || 'default'].join(',')
);
