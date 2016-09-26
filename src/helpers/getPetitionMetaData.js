import getPetitionMetaData from 'selectors/petitionMetaData';
import getPetitionOpenGraph from 'selectors/petitionOpenGraph';

export default (petition = {}) => ([].concat(
  getPetitionMetaData(petition),
  getPetitionOpenGraph(petition)
));
