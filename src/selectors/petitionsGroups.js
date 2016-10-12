import { set } from 'lodash/object';
import { forEach } from 'lodash/collection';
import getPetitions from 'selectors/petitions';

export default (petitions = {}, groups = []) => {
  const petitionGroups = {};

  forEach(groups, (group) =>
    set(petitionGroups, group, getPetitions(petitions[group].data || []))
  );

  return petitionGroups;
};
