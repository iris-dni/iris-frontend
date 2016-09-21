export default (sort) => {
  switch (sort) {
    case 'supporters':
      return '-supporters.amount';
    default:
      return '-created';
  }
};
