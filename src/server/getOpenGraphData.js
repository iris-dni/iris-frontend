import getPetitionOpenGraphData from 'selectors/petitionOpenGraphData';

export default (componentName, state = {}) => {
  switch (componentName) {
    case 'PetitionContainer':
      return getPetitionOpenGraphData(state.petition);
    default:
      return [];
  }
};
