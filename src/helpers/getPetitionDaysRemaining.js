import moment from 'moment';
import getPetitionEndDate from 'selectors/petitionEndDate';

export default ({ created, expires }, timeNow) => {
  const endDate = getPetitionEndDate({ created, expires });
  const nowDate = timeNow || moment().valueOf();
  const daysRemaining = moment.duration(moment(endDate).diff(nowDate)).asDays();
  return Math.max(Math.round(daysRemaining), 0);
};
