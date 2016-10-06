import supportCountIncreased from 'helpers/supportCountIncreased';
import settings from 'settings';
import getPetitionPath from './getPetitionPath';

export default (oldPetiton, newPetition) => {
  const contentKey = supportCountIncreased(oldPetiton, newPetition)
    ? 'newlySupported'
    : 'alreadySupported';
  return {
    link: getPetitionPath(newPetition.id),
    ...settings.supportPetition[contentKey].modal
  };
};
