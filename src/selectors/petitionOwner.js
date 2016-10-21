import { get } from 'lodash/object';

export default (petition = {}) => {
  if (petition.owner) {
    return [
      get(petition, 'owner.firstname') || get(petition, 'owner.data.firstname'),
      get(petition, 'owner.lastname') || get(petition, 'owner.data.lastname')
    ].join(' ');
  }
  return '';
};
