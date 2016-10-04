import getPetitionDaysRemaining from 'helpers/getPetitionDaysRemaining';

export default ({ state, dc }) => !!state &&
  state.parent === 'supportable' &&
  getPetitionDaysRemaining(dc || {}) > 0;
