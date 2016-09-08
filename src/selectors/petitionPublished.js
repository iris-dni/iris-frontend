export default ({ state }) => {
  switch (!!state && state.name) {
    case false:
    case 'draft':
    case 'rejected':
      return false;
    default:
      return true;
  }
};
