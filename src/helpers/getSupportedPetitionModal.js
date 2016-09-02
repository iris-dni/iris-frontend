import supportCountIncreased from 'helpers/supportCountIncreased';
import settings from 'settings';

export default (oldPetiton, newPetition) => {
  const contentKey = supportCountIncreased(oldPetiton, newPetition)
    ? 'newlySupported'
    : 'alreadySupported';
  return {
    link: `${process.env.BASE_URL}/petitions/${newPetition.id}`,
    ...settings.supportPetition[contentKey].modal
  };
};
