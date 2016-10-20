import moment from 'moment';
import getPetitionEndDate from 'selectors/petitionEndDate';

export default ({ created, expires }) => {
  const endDate = getPetitionEndDate({ created, expires });
  const nowDate = moment().valueOf();
  const daysRemaining = moment.duration(moment(endDate).diff(nowDate)).asDays();
  return Math.max(Math.round(daysRemaining), 0);
};
