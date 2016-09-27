import getPetitionStartDate from 'selectors/petitionStartDate';
import settings from 'settings';
import moment from 'moment';

export default ({ dc }) => {
  const startDate = getPetitionStartDate(dc || {});
  return settings.startDate
    .replace('%d', moment(startDate).format(settings.dateFormat));
};
