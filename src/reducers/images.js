import {
  SUBMITTING_IMAGE,
  CREATED_IMAGE
} from 'actions/actionTypes';

const initialState = {
  images: []
};

export default function images (state = initialState, action) {
  switch (action.type) {
    case SUBMITTING_IMAGE:
      return Object.assign({},
        state, {
          isLoading: true
        }
      );
    case CREATED_IMAGE:
      const appendedImages = state.images.concat([
        action.file.id
      ]);
      return Object.assign({},
        state,
        {
          images: appendedImages,
          isLoading: false
        }
     );
    default:
      return state;
  }
}
