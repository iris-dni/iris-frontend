import moment from 'moment';
import getPetitionEndDate from 'selectors/petitionEndDate';
import settings from 'settings';

export default ({ dc }) => {
  const { created, effective, expires } = dc || {};
  const startDate = moment(effective || created);
  const endDate = getPetitionEndDate({ created, expires });
  return settings.dateRange
    .replace('%s', moment(startDate).format(settings.dateFormat))
    .replace('%e', moment(endDate).format(settings.dateFormat));
};
