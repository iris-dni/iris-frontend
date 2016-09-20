import settings from 'settings';

export default (state) => (
  settings.petitionsStates[state || 'default'].join(',')
);
