import { get } from 'lodash/object';

export default ({ petitions, petition }, context) => {
  switch (context) {
    case 'petitions':
      return get(petitions, 'currentCity.tags', []).join(',');
    case 'petition':
      return get(petition, 'city.data.tags', []).join(',');
    default:
      return '';
  }
};
