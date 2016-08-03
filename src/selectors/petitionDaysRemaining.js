import moment from 'moment';
import getPetitionEndDate from './petitionEndDate';

export default (dc) => {
  const { created, effective } = dc;
  const startDate = moment(effective || created);
  const endDate = getPetitionEndDate(dc);
  return moment.duration(endDate.diff(startDate)).asDays();
};
