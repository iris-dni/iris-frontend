import moment from 'moment';
import getPetitionEndDate from './petitionEndDate';
import settings from 'settings';

export default ({ created, effective, expires }) => {
  const startDate = moment(effective || created);
  const endDate = getPetitionEndDate({ created, expires });

  return settings.dateRange
    .replace('%s', startDate.format(settings.dateFormat))
    .replace('%e', endDate.format(settings.dateFormat));
};
