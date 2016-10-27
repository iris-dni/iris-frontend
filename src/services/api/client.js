import axios from 'axios';
import FormData from 'form-data';
import createApiUrl from 'helpers/createApiUrl';
import encodeParams from 'helpers/encodeParams';

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
  request: (requestPath = '', data = {}, method = GET) => {
    let options = {
      url: apiUrl(requestPath),
      method,
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
          options.headers = data.getHeaders();
        }

        options.data = data;

        break;
    }

    return axios(options).then(response => response.data);
  }
};
