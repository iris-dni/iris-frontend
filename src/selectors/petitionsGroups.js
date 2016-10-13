import { set } from 'lodash/object';
import getPetitions from 'selectors/petitions';

export default (petitions, groups) => {
  const petitionGroups = {};

  groups.forEach((group) =>
    set(petitionGroups, group.group, getPetitions(petitions[group.group] && petitions[group.group].data || []))
  );

  return petitionGroups;
};
