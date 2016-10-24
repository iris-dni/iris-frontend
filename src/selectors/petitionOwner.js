import { get } from 'lodash/object';

export default (petition = {}) => {
  const firstname = get(petition, 'owner.firstname') || get(petition, 'owner.data.firstname');
  const lastname = get(petition, 'owner.lastname') || get(petition, 'owner.data.lastname');

  if (petition.owner && (firstname || lastname)) {
    return [firstname, lastname].join(' ').trim();
  }

  return '';
};
