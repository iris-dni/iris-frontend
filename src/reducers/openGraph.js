import { assign } from 'lodash/object';

import {
  REQUEST_OPEN_GRAPH,
  RECEIVE_OPEN_GRAPH,
  REMOVE_OPEN_GRAPH
} from 'actions/actionTypes';

const initialState = {
  links: []
};

export default function openGraph (state = initialState, action) {
  switch (action.type) {
    case REQUEST_OPEN_GRAPH:
      return assign({},
        state,
        { isLoading: true }
      );
    case REMOVE_OPEN_GRAPH:
      const reducedLinks = state.links.filter(link => link.url !== action.url);
      return assign({},
        state,
        { links: reducedLinks }
      );
    case RECEIVE_OPEN_GRAPH:
      const appendedLinks = state.links.concat([{
        url: action.openGraph.url,
        og: action.openGraph
      }]);
      return assign({},
        state,
        {
          links: appendedLinks,
          isLoading: false
        }
      );
    default:
      return state;
  }
}
