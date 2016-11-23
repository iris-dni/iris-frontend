import settings from 'settings';
import getPetitionSupporters from 'selectors/petitionSupporters';
import getPetitionProcessing from 'selectors/petitionProcessing';
import getPetitionResponseDaysPending from 'helpers/getPetitionResponseDaysPending';

const localise = (time = '') => time.toLocaleString(settings.locale);

export default (petition = {}) => {
  const petitionProcessing = getPetitionProcessing(petition);
  const { amount, required } = getPetitionSupporters(petition);
  const daysPending = getPetitionResponseDaysPending(petition);
  const reponseName = petition.city_answer && petition.city_answer.name;

  return settings.petitionResponseStatus[petitionProcessing ? 'pending' : 'arrived'].text
    .replace('%amount', localise(amount))
    .replace('%required', localise(required))
    .replace('%daysPending', localise(daysPending))
    .replace('%name', reponseName);
};
