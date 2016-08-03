export default ({ amount, required }) => {
  const percentage = (amount / required) * 100;
  return Math.min(percentage, 100);
};
