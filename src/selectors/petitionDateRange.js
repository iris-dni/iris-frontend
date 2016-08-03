import moment from 'moment';
import settings from 'settings';

export default (dc) => {
  const { created, effective, expires } = dc;

  const startDate = moment(effective || created);

  const endDate = expires
    ? moment(expires)
    : moment(created).add(30, 'days');

  return settings.dateRange
    .replace('%s', startDate.format('D.M.YYYY'))
    .replace('%e', endDate.format('D.M.YYYY'));
};
