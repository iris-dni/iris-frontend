export default (limit) => {
  return Math.min((limit && limit > 0 ? limit : 12), 50);
};
