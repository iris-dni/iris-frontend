import supportCountIncreased from 'helpers/supportCountIncreased';
import settings from 'settings';
import getPetitionLink from './getPetitionLink';

export default (oldPetiton, newPetition) => {
  const contentKey = supportCountIncreased(oldPetiton, newPetition)
    ? 'newlySupported'
    : 'alreadySupported';
  return {
    link: getPetitionLink(newPetition.id),
    ...settings.supportPetition[contentKey].modal
  };
};
