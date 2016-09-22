export default (petition = {}) => {
  const isProcessing = petition.state.name === 'processing';
  const hasText = !!petition.city_answer.text;

  if (isProcessing && hasText) {
    return petition.city_answer;
  }

  return {};
};
