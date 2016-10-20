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
      return Object.assign({},
        state,
        { isLoading: true }
      );
    case REMOVE_OPEN_GRAPH:
      const reducedLinks = state.links.filter(link => link.url !== action.url);
      return Object.assign({},
        state,
        { links: reducedLinks }
      );
    case RECEIVE_OPEN_GRAPH:
      const appendedLinks = state.links.concat([{
        url: action.openGraph.url,
        og: action.openGraph
      }]);
      return Object.assign({},
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
