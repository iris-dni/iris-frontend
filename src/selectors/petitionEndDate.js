import moment from 'moment';
import settings from 'settings';

export default ({ created, expires }) => expires ||
  moment(created).add(settings.daysToVote, 'days').toISOString();
