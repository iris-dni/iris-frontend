import moment from 'moment';

export default (dc) => {
  const { created, expires } = dc;

  return expires
    ? moment(expires)
    : moment(created).add(30, 'days');
};
