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
    const requestPath = '/petitions?resolve=city,links,owner';
    return ApiClient.request(requestPath, { data: petition }, POST);
  },

  update: (petition) => {
    const requestPath = path.join('/petitions', `${petition.id.toString()}?resolve=city,links,owner`);
    delete petition.id;

    if (petition.city && !petition.city.data) {
      // API requires this format without a city
      petition.city = { id: null };
    }

    return ApiClient.request(requestPath, { data: petition }, POST);
  },

  publish: ({ petition, mobile_token }) => {
    const requestPath = path.join('/petitions', petition.id.toString(), '/event/publish?resolve=city,links,owner');
    const payload = mobile_token ? { mobile_token } : {}; // eslint-disable-line camelcase
    return ApiClient.request(requestPath, { data: payload }, POST);
  },

  support: ({ petition, mobile_token, user }) => {
    const requestPath = path.join('/petitions', petition.id.toString(), '/event/support?resolve=city,links,owner');
    const payload = mobile_token ? { mobile_token, user } : { user }; // eslint-disable-line camelcase
    return ApiClient.request(requestPath, { data: payload }, POST);
  },

  respond: ({ petitionId, answer, token }) => {
    const requestPath = path.join('/petitions', petitionId.toString(), 'event/setFeedback?resolve=city');
    return ApiClient.request(requestPath, { data: { answer, token } }, POST);
  }
};
