import getPetitionOpenGraph from 'selectors/petitionOpenGraph';

export default (componentName, state = {}) => {
  switch (componentName) {
    case 'PetitionContainer':
      return getPetitionOpenGraph(state.petition);
    default:
      return [];
  }
};
