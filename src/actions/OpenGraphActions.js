import openGraphRepository from 'services/api/repositories/openGraph';

import {
  REQUEST_OPEN_GRAPH,
  RECEIVE_OPEN_GRAPH,
  REMOVE_OPEN_GRAPH
} from './actionTypes';

export function fetchOpenGraph (url) {
  return (dispatch, getState) => {
    dispatch(requestOpenGraph());
    return openGraphRepository.check(url)
      .then(response => dispatch(
        receiveOpenGraph(response.data)
      ))
      // Instead of responding with an empty object when no OG data is found,
      // (probably only happens when the website doesn’t exist), the API
      // responds with a status of 400, triggering an error.
      .catch(() => {
        const PROTOCOL_REGEX = new RegExp(/^(https?:\/\/)/i);
        // Dispatch the result with only the URL property available.
        return dispatch(receiveOpenGraph({
          // Force prepend a HTTP protocol if no protocol is present.
          url: PROTOCOL_REGEX.test(url) ? url : `http://${url}`
        }));
      });
  };
}

export function requestOpenGraph () {
  return {
    type: REQUEST_OPEN_GRAPH
  };
}

export function removeOpenGraph (url) {
  return {
    type: REMOVE_OPEN_GRAPH,
    url
  };
}

export function receiveOpenGraph (openGraph) {
  return {
    type: RECEIVE_OPEN_GRAPH,
    openGraph
  };
}
