import getPetitionEndDate from 'selectors/petitionEndDate';
import settings from 'settings';
import moment from 'moment';

export default ({ dc }) => {
  const endDate = getPetitionEndDate(dc || {});
  return settings.endDate
    .replace('%d', moment(endDate).format(settings.dateFormat));
};
