import petitionRepository from 'services/api/repositories/petition';
import petitionRejected from 'selectors/petitionRejected';

export default (nextState, replace, callback) => {
  const { params } = nextState || {};
  const paramsId = params.id | '';
  petitionRepository.find(paramsId)
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
