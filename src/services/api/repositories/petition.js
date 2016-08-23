import ApiClient from 'services/api/client';
import getRequestParams from 'helpers/getPetitionsRequestParams';
import path from 'path';

export default {
  find: (id) => {
    const requestPath = path.join('/petitions', id.toString());
    return ApiClient.request(requestPath);
  },

  all: (options = {}) => {
    const requestPath = '/petitions';
    const requestParams = getRequestParams(options);
    return ApiClient.request(requestPath, requestParams);
  },

  create: (petition) => {
    const requestPath = '/petitions';
    return ApiClient.request(requestPath, petition, 'POST');
  },

  update: (petition) => {
    const requestPath = path.join('/petitions', petition.id.toString());
    delete petition.id;
    return ApiClient.request(requestPath, petition, 'POST');
  },

  publish: (id) => {
    console.log('PETITION PUBLISH REPOSITORY');
    const requestPath = path.join('/petitions', id.toString(), '/event/publish');
    return ApiClient.request(requestPath, null, 'POST');
  }
};
