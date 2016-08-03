import moment from 'moment';
import settings from 'settings';

export default (dc) => {
  const { effective, expires } = dc;
  const startDate = moment(effective).format('D.M.YYYY');
  const endDate = moment(expires).format('D.M.YYYY');

  return settings.dateRange
    .replace('%s', startDate)
    .replace('%e', endDate);
};
