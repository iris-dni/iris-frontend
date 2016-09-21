import settings from 'settings';

export default (limit) => {
  return Math.min((limit && limit > 0 ? limit : settings.petitionsPerPage), 50);
};
