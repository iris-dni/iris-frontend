import moment from 'moment';
import getPetitionEndDate from 'selectors/petitionEndDate';

// @TODO: Calculate number of days pending based on `letterSentDate` once it's
// available; Add test!
export default ({ created, expires }) => {
  const endDate = getPetitionEndDate({ created, expires });
  const nowDate = moment().valueOf();
  const daysPending = moment.duration(moment(nowDate).diff(endDate)).asDays();
  return Math.max(Math.round(daysPending), 0);
};
