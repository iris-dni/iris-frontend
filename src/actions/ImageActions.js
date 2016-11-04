import fileRepository from 'services/api/repositories/file';

import {
  SUBMITTING_IMAGE,
  CREATED_IMAGE
} from './actionTypes';

export function uploadImage (file, index) {
  return (dispatch) => {
    dispatch(createImage());
    return fileRepository.create(file)
      .then(response => dispatch(
        createdImage(response.data, index)
      ));
  };
}

export function createImage () {
  return {
    type: SUBMITTING_IMAGE
  };
}

export function createdImage (file, index) {
  return {
    type: CREATED_IMAGE,
    file
  };
}
