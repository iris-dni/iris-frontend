import getPetitionProcessing from './petitionProcessing';

export default ({ state }) => !(getPetitionProcessing({ state }) && state.name === 'letterResponseArrived');
