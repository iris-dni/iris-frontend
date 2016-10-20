import getPetitionClosed from './petitionClosed';

export default (petition = {}) => {
  const hasClosed = getPetitionClosed(petition);
  const hasText = !!petition.city_answer && !!petition.city_answer.text;

  if (hasClosed && hasText) {
    return petition.city_answer;
  }

  return {};
};
