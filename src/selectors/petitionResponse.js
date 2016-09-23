export default (petition = {}) => {
  const hasResponded = petition.state.parent === 'processing' &&
    petition.state.name === 'letterResponseArrived';
  const hasText = !!petition.city_answer.text;

  if (hasResponded && hasText) {
    return petition.city_answer;
  }

  return {};
};
