import petitionRepository from 'services/api/repositories/petition';
import petitionPublished from 'selectors/petitionPublished';
import petitionPath from 'selectors/petitionPath';

export default (nextState, replace, callback) => {
  const { params } = nextState || {};
  petitionRepository.find(params.id)
    .then(response => {
      if (petitionPublished(response.data)) {
        replace(petitionPath(response.data));
      }
      callback();
    }).catch(() => {
      callback('Not found');
    });
};
