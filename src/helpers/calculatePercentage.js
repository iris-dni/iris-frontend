export default (amount, required) => {
  const amountVal = Math.max((amount || 0), 0);
  const requiredVal = Math.max((required || 0), 1);
  const percentage = amountVal / requiredVal * 100;
  return Math.min(percentage, 100);
};
