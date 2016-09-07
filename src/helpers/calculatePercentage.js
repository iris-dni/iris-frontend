export default (amount, required) => {
  if (required <= 0) {
    return 0;
  }

  const amountVal = Math.max((amount || 0), 0);
  const requiredVal = Math.max((required || 0), 1);
  const percentage = amountVal / requiredVal * 100;
  return Math.min(percentage, 100);
};
