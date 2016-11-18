export default ({ state }) => {
  switch (!!state && state.name) {
    case false:
    case 'rejected':
      return true;
    default:
      return false;
  }
};
