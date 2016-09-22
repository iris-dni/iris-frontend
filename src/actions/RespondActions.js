import petitionRepository from 'services/api/repositories/petition';

import {
  requestPetition,
  receivePetition
} from 'actions/PetitionActions';

export function fetchPetitionByResponseToken (responseToken) {
  return (dispatch, getState) => {
    dispatch(requestPetition());
    return petitionRepository.findByResponseToken(responseToken)
      .then(response => dispatch(
        receivePetition(response.data)
      ));
  };
}
