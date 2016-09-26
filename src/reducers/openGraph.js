import {
  REQUEST_OPEN_GRAPH,
  RECEIVE_OPEN_GRAPH
} from 'actions/actionTypes';

const initialState = {};

export default function openGraph (state = initialState, action) {
  switch (action.type) {
    case REQUEST_OPEN_GRAPH:
      return Object.assign({},
        state,
        { isLoading: true }
      );
    case RECEIVE_OPEN_GRAPH:
      return Object.assign({},
        state,
        {
          [action.openGraph.url]: action.openGraph,
          isLoading: false
        }
      );
    default:
      return state;
  }
}
