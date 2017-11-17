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
    'closedWithoutLetterResponse'
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
    'closedWithoutLetterResponse'
  ],
  past: [
    'processing.*',
    'loser',
    'closed',
    'closedWithoutLetterResponse'
  ],
  winning: [
    'supportable.winner',
    'processing.*',
    'closed',
    'closedWithoutLetterResponse'
  ]
};

export default (state) => (
  PETITIONS_STATES[state || 'default'].join(',')
);
