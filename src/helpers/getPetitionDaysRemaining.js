import moment from 'moment';
import getPetitionEndDate from 'helpers/getPetitionEndDate';

export default ({ created, effective, expires }) => {
  const startDate = moment(effective || created);
  const endDate = getPetitionEndDate({ created, expires });
  const daysRemaining = moment.duration(endDate.diff(startDate)).asDays();
  return Math.round(daysRemaining);
};
