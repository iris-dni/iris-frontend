import moment from 'moment';

export default ({ created, expires }) => {
  return expires
    ? moment(expires)
    : moment(created).add(30, 'days');
};
