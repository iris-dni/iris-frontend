import supportCountIncreased from 'helpers/supportCountIncreased';
import settings from 'settings';
import getPetitionURL from './getPetitionURL';

export default (oldPetiton, newPetition) => {
  const contentKey = supportCountIncreased(oldPetiton, newPetition)
    ? 'newlySupported'
    : 'alreadySupported';
  return {
    link: getPetitionURL(newPetition.id),
    ...settings.supportPetition[contentKey].modal
  };
};
