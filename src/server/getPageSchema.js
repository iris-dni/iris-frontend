import getPetitionSchema from 'selectors/petitionSchema';

export default (componentName, state = {}) => {
  switch (componentName) {
    case 'PetitionContainer':
      return getPetitionSchema(state.petition);
  }

  return {};
};
