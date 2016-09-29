export default (petition = {}) => {
  const hasEnoughSupporters = petition.supporters.amount >= petition.supporters.required;
  const isWinner = petition.state.name === 'winner' || petition.state.parent === 'processing';

  if (isWinner && hasEnoughSupporters) {
    return true;
  }

  return false;
};
