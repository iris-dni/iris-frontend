import moment from 'moment';
import getPetitionEndDate from './petitionEndDate';

export default ({ created, effective, expires }) => {
  const startDate = moment(effective || created);
  const endDate = getPetitionEndDate({ created, expires });
  return moment.duration(endDate.diff(startDate)).asDays();
};
