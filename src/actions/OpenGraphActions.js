import openGraphRepository from 'services/api/repositories/openGraph';

import {
  REQUEST_OPEN_GRAPH,
  RECEIVE_OPEN_GRAPH
} from './actionTypes';

export function fetchOpenGraph (url) {
  return (dispatch, getState) => {
    dispatch(requestOpenGraph());
    return openGraphRepository.check(url)
      .then(response => dispatch(
        receiveOpenGraph(response.data)
      ));
  };
}

export function requestOpenGraph () {
  return {
    type: REQUEST_OPEN_GRAPH
  };
}

export function receiveOpenGraph (openGraph) {
  return {
    type: RECEIVE_OPEN_GRAPH,
    openGraph
  };
}
