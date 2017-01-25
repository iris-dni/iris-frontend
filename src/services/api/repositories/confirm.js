// Service for validating email addresses by key on the server
// Note: this should not be part of any frontend bundle
// to not to expose the API key

import ApiClient, { GET } from 'services/api/client';
import path from 'path';

const API_KEY = process.env.API_KEY;

export default {
  validate: (key = '') => {
    const requestPath = path.join('/confirmations', key.toString(), 'confirm');
    const requestParams = { token: key };
    const requestHeader = {
      'x-iris-api-key': API_KEY
    };

    return ApiClient.request(requestPath, requestParams, GET, requestHeader);
  }
};
