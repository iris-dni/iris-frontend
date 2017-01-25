export default ({ state }) => !!state &&
  state.parent === 'processing' &&
  state.name !== 'sendLetterRequested';
