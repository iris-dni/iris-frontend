import moment from 'moment';
import getPetitionEndDate from './petitionEndDate';
import settings from 'settings';

export default (dc) => {
  const { created, effective } = dc;
  const startDate = moment(effective || created);
  const endDate = getPetitionEndDate(dc);

  return settings.dateRange
    .replace('%s', startDate.format('D.M.YYYY'))
    .replace('%e', endDate.format('D.M.YYYY'));
};
