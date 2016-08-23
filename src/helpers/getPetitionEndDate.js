import moment from 'moment';
import settings from 'settings';

export default ({ created, expires }) => {
  return expires
    ? moment(expires)
    : moment(created).add(settings.daysToVote, 'days');
};
