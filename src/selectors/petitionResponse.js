import getPetitionClosed from './petitionClosed';
import settings from 'settings';

export default (petition = {}) => {
  const hasClosed = getPetitionClosed(petition);
  const hasText = !!petition.city_answer && !!petition.city_answer.text;

  if (hasClosed && hasText) {
    return petition.city_answer;
  }

  return {};
};

export const translationForResponse = ({ hasCityAnswerAlreadySubmitted, petitionTitle }) => {
  if (hasCityAnswerAlreadySubmitted) {
    const translation = settings.petitionResponseTokenErrorPage.cityAnswerAlreadySubmitted;
    return {
      ...translation,
      hint: translation.hint.replace('%s', petitionTitle)
    };
  }
  return settings.petitionResponseTokenErrorPage.default;
};
