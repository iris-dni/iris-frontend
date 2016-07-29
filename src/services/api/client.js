import axios from 'axios';
import createApiUrl from 'helpers/createApiUrl';

const API_URL = process.env.API_URL;
const API_PATH_PREFIX = '/api';

const apiUrl = (requestPath) => {
  const prefix = __SERVER__
    ? API_URL
    : API_PATH_PREFIX;

  return createApiUrl(prefix, requestPath);
}

export default {
  request: (requestPath = '', method = 'GET', data) => {
    return axios({
      method: method,
      url: apiUrl(requestPath),
      data: data
    });
  }
};
