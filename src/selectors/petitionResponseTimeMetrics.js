import getPetitionResponseDaysPending from 'helpers/getPetitionResponseDaysPending';

export default (petition = {}) => ({
  daysPending: getPetitionResponseDaysPending(petition.dc)
});
