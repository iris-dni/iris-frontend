export default (path) => {
  if (path && path.indexOf('/petitions') > -1) {
    return 'petitions';
  }
  return '';
};

