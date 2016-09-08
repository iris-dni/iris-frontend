export default ({ state }) => {
  return !!state && state.parent === 'supportable';
};
