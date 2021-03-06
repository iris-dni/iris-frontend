import petitionRepository from 'services/api/repositories/petition';
import petitionRejected from 'selectors/petitionRejected';

export default (nextState, replace, callback) => {
  const { params } = nextState || {};
  petitionRepository.find(params.id)
    .then(response => {
      if (petitionRejected(response.data)) {
        replace('/petitions');
      }
      callback();
    }).catch(() => {
      replace('/404');
      callback();
    });
};
