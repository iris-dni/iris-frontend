import settings from 'settings';
import getPetitions from 'selectors/petitions';

export default (petitions, group) => {
  const groupData = petitions[group] || {};
  return {
    petitions: getPetitions(groupData.data || []),
    isLoading: groupData.isLoading,
    ...settings.petitionGroups[group]
  };
};
