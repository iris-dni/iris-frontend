import { assign } from 'lodash/object';
import axios from 'axios';
import FormData from 'form-data';
import createApiUrl from 'helpers/createApiUrl';
import encodeParams from 'helpers/encodeParams';

export const API_KEY_HEADER_NAME = 'X-Iris-Api-Key';

const apiUrl = (requestPath) => {
  const prefix = process.env.API_URL;

  if (!prefix) {
    throw new Error('Please define an API_URL in .env');
  }

  return createApiUrl(prefix, requestPath);
};

export const GET = 'GET';
export const POST = 'POST';

export default {
  request: (requestPath = '', data = {}, method = GET, headers = {}) => {
    let options = {
      url: apiUrl(requestPath),
      method,
      headers,
      withCredentials: true
    };

    switch (method) {
      case GET:
        const requestParams = encodeParams(data);

        if (requestParams.length > 0) {
          options.url += `?${requestParams}`;
        }

        options.data = {};

        break;
      case POST:
        if (data instanceof FormData) {
          options.headers = assign(options.headers, {
            'Content-Type': 'multipart/form-data'
          });
        }

        options.data = data;

        break;
    }

    return axios(options).then(response => response.data);
  }
};
