import supportCountIncreased from 'helpers/supportCountIncreased';
import settings from 'settings';
import getPetitionURL from './getPetitionURL';
import getPetitionPath from './getPetitionPath';

export default (oldPetiton, newPetition) => {
  const contentKey = supportCountIncreased(oldPetiton, newPetition)
    ? 'newlySupported'
    : 'alreadySupported';
  return {
    href: getPetitionPath(newPetition.id),
    link: getPetitionURL(newPetition.id),
    ...settings.supportPetition[contentKey].modal
  };
};
