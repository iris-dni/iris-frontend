import settings from 'settings';

export const TITLE_TEMPLATE = `%s | ${settings.title}`;

export default (componentName, state = {}) => {
  console.log('asdas', componentName);
  switch (componentName) {
    case 'PetitionContainer':
      const { petition } = state;
      return TITLE_TEMPLATE.replace('%s', petition && petition.title);
    case 'PetitionsContainer':
      return TITLE_TEMPLATE.replace('%s', settings.petitionsPageTitle);
    case 'CreatePetitionContainer':
      return TITLE_TEMPLATE.replace('%s', settings.createPetitionPageTitle);
  }

  return settings.title;
};
