import axios from 'axios';
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
    let payload = {};

    switch (method) {
      case GET:
        const requestParams = encodeParams(data);

        if (requestParams.length > 0) {
          requestPath += `?${requestParams}`;
        }
        break;
      case POST:
        if (data !== {}) {
          payload = data;
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
