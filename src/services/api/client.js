import axios from 'axios';
import createApiUrl from 'helpers/createApiUrl';
import queryParams from 'query-params';

const apiUrl = (requestPath) => {
  const prefix = process.env.API_URL;

  if (!prefix) {
    throw new Error('Please define an API_URL in .env');
  }

  return createApiUrl(prefix, requestPath);
};

export default {
  request: (requestPath = '', data = {}, method = 'GET') => {
    let payload = {};

    switch (method) {
      case 'GET':
        const requestParams = queryParams.encode(data);

        if (requestParams.length > 0) {
          requestPath += `?${requestParams}`;
        }
        break;
      case 'POST':
        if (data !== {}) {
          payload = { data: data };
        }
        break;
    }

    return axios({
      method: method,
      url: apiUrl(requestPath),
      data: payload,
      withCredentials: true
    }).then(response => response.data);
  }
};
