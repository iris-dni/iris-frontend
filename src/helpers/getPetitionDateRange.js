import moment from 'moment';
import getPetitionEndDate from 'helpers/getPetitionEndDate';
import settings from 'settings';

export default ({ dc }) => {
  const { created, effective, expires } = dc || {};
  const startDate = moment(effective || created);
  const endDate = getPetitionEndDate({ created, expires });
  return settings.dateRange
    .replace('%s', startDate.format(settings.dateFormat))
    .replace('%e', endDate.format(settings.dateFormat));
};
