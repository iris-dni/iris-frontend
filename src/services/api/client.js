import axios from 'axios';
import createApiUrl from 'helpers/createApiUrl';
import queryParams from 'query-params';

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
  request: (requestPath = '', data = {}, method = 'GET') => {
    if (method === 'GET') {
      const requestParams = queryParams.encode(data);

      if (requestParams.length > 0) {
        requestPath += `?${requestParams}`;
        data = {};
      }
    }

    return axios({
      method: method,
      url: apiUrl(requestPath),
      data: data
    });
  }
};
