import axios from 'axios';
import createApiUrl from 'helpers/createApiUrl';

const API_PATH_PREFIX = '/api';

export default {
  request: (requestPath = '', method = 'GET', data) => {
    return axios({
      method: method,
      url: createApiUrl(API_PATH_PREFIX, requestPath),
      data: data
    });
  }
};
