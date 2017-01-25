import moment from 'moment';
import settings from 'settings';
import getPetitionEndDate from 'selectors/petitionEndDate';

export default ({ state, dc }) => {
  const expiryDate = state.letter_wait_expire;
  let compareDate;

  if (expiryDate) {
    const letterExpires = moment(state.letter_wait_expire);
    compareDate = letterExpires.subtract(settings.daysForResponse, 'days');
  } else {
    compareDate = getPetitionEndDate(dc);
  }

  const nowDate = moment().valueOf();
  const daysPending = moment.duration(moment(nowDate).diff(compareDate)).asDays();
  return Math.max(Math.round(daysPending), 0);
};
