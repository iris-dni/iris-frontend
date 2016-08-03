import petitionRepository from 'services/api/repositories/petition';
import {
  REQUEST_PETITION,
  RECEIVE_PETITION,
  REQUEST_PETITIONS,
  RECEIVE_PETITIONS
} from './actionTypes';

export function requestPetition () {
  return {
    type: REQUEST_PETITION
  };
}

export function receivePetition (petition) {
  return {
    type: RECEIVE_PETITION,
    petition
  };
}

export function fetchPetition (id) {
  return (dispatch, getState) => {
    dispatch(requestPetition());
    return petitionRepository.find(id)
      .then(response => dispatch(
        receivePetition(response.data.data)
      ));
  };
}

export function requestPetitions () {
  return {
    type: REQUEST_PETITIONS
  };
}

export function receivePetitions (petitions) {
  return {
    type: RECEIVE_PETITIONS,
    petitions
  };
}

export function fetchPetitions () {
  return (dispatch, getState) => {
    dispatch(requestPetitions());
    return petitionRepository.all()
    .then(response => {
      return dispatch(
        receivePetitions(response.data)
      );
    });
  };
}
