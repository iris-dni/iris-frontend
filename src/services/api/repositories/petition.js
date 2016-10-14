import ApiClient, { POST } from 'services/api/client';
import getRequestParams from 'helpers/getPetitionsRequestParams';
import path from 'path';

export default {
  find: (id) => {
    const requestPath = path.join('/petitions', id.toString());
    const requestParams = { resolve: 'city,owner,links,mentions', extend: 'supporting' };
    return ApiClient.request(requestPath, requestParams);
  },

  findByResponseToken: (responseToken) => {
    const requestPath = path.join('/token/', responseToken, '/petitions');
    const requestParams = { resolve: 'city,owner' };
    return ApiClient.request(requestPath, requestParams);
  },

  all: (options = {}) => {
    const requestPath = '/petitions';
    const requestParams = getRequestParams(options);
    return ApiClient.request(requestPath, requestParams);
  },

  create: (petition) => {
    const requestPath = '/petitions';
    return ApiClient.request(requestPath, { data: petition }, 'POST');
  },

  update: (petition) => {
    const requestPath = path.join('/petitions', petition.id.toString());
    delete petition.id;

    if (petition.city && !petition.city.data) {
      delete petition.city.data;
    }

    return ApiClient.request(requestPath, { data: petition }, 'POST');
  },

  publish: (petition) => {
    const requestPath = path.join('/petitions', petition.id.toString(), '/event/publish');
    return ApiClient.request(requestPath, null, POST);
  },

  support: (trustData) => {
    const { petition } = trustData;
    const requestPath = path.join('/petitions', petition.id.toString(), '/event/support');
    return ApiClient.request(requestPath, { data: trustData }, POST);
  },

  respond: (response) => {
    const requestPath = path.join('/petitions', response.petitionId.toString(), 'event/setFeedback?resolve=city');
    const requestPayload = {
      data: {
        answer: response.answer,
        token: response.token
      }
    };
    return ApiClient.request(requestPath, requestPayload, POST);
  }
};
