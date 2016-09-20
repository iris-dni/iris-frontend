import settings from 'settings';
import getPetitionsPageTitle from 'helpers/getPetitionsPageTitle';

export const TITLE_TEMPLATE = `%s | ${settings.title}`;

export default (componentName, state = {}) => {
  switch (componentName) {
    case 'PetitionContainer':
      const { petition } = state;
      return TITLE_TEMPLATE.replace('%s', petition && petition.title);
    case 'PetitionsContainer':
      const { petitions } = state;
      const contextualPageTitle = getPetitionsPageTitle(petitions && petitions.currentCity);
      return TITLE_TEMPLATE.replace('%s', contextualPageTitle);
    case 'NewPetitionContainer':
      return TITLE_TEMPLATE.replace('%s', settings.newPetitionPage.title);
    case 'EditPetitionContainer':
      return TITLE_TEMPLATE.replace('%s', settings.editPetitionPage.title);
  }

  return settings.title;
};
