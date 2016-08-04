import settings from 'settings';

export const TITLE_TEMPLATE = `%s | ${settings.title}`;

export default (componentName, state = {}) => {
  switch (componentName) {
    case 'PetitionContainer':
      const { petition } = state;
      return TITLE_TEMPLATE.replace('%s', petition && petition.title);
  }

  return settings.title;
};
