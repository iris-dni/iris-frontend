export default (location) => {
  return location.action === 'PUSH' || location.action === 'REPLACE';
};
