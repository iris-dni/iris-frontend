export default ({ state }) => {
  switch (!!state && state.name) {
    case 'rejected':
      return true;
    case false:
    default:
      return false;
  }
};
