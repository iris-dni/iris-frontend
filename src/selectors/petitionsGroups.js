import { set } from 'lodash/object';
import getPetitions from 'selectors/petitions';

export default (petitions, groups) => {
  const petitionGroups = {};

  groups.forEach((group) => {
    const data = { data: getPetitions(petitions[group.group] && petitions[group.group].data || []) };
    const isLoading = { isLoading: petitions[group.group] && petitions[group.group].isLoading || false };

    set(
      petitionGroups,
      group.group,
      Object.assign({}, data, isLoading)
    );
  });

  return petitionGroups;
};
