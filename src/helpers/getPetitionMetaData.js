import getPetitionMetaData from 'selectors/petitionMetaData';
import getPetitionOpenGraph from 'selectors/petitionOpenGraph';
import getPetitionTwitterCard from 'selectors/petitionTwitterCard';

export default (petition = {}) => ([].concat(
  getPetitionMetaData(petition),
  getPetitionOpenGraph(petition),
  getPetitionTwitterCard(petition)
));
