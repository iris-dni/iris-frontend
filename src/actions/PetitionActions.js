import axios from 'axios';
import {
  REQUEST_PETITION, RECEIVE_PETITION
} from './actionTypes';

// const mock = {
//   'id': 1,
//   'state': ['signable', 'active'],
//   'tags': ['big'],
//   'title': 'Petition title',
//   'city': 1,
//   'type': '',
//   'description': 'Petition description',
//   'suggested_solution': 'Solve it!'
// };

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

export function fetchPetition () {
  // NOTE: instead of returning an object, we return a function that can
  // dispatch actions and return a Promise for when it's all complete!
  return (dispatch, getState) => {
    dispatch(requestPetition());
    return axios.get('http://api-iris-dev.lovelysystems.com/v1/petitions/2')
      .then((res) => {
        return dispatch(receivePetition(res.data.data));
      });
  };
}
