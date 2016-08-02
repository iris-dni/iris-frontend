import axios from 'axios';
import createApiUrl from 'helpers/createApiUrl';

const API_PATH_PREFIX = '/api';

const apiUrl = (requestPath) => {
  const prefix = __SERVER__
    ? process.env.API_URL
    : API_PATH_PREFIX;

  if (!prefix) {
    throw new Error('Please define an API_URL in .env');
  }

  return createApiUrl(prefix, requestPath);
};

export default {
  request: (requestPath = '', method = 'GET', data) => {
    return axios({
      method: method,
      url: apiUrl(requestPath),
      data: data
    });
  }
};
