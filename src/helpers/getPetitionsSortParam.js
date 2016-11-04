export default (sort) => {
  switch (sort) {
    case 'supporters':
      return '-supporters.amount';
    case 'trending':
      return 'trending';
    default:
      return '-created';
  }
};
