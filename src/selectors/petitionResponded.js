export default ({ state }) => {
  if (state.name === 'letterResponseArrived' && state.parent === 'processing') {
    return true;
  }

  return false;
};
