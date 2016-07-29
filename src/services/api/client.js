import axios from 'axios';
import createApiUrl from 'helpers/createApiUrl';

const API_URL = process.env.API_URL;

export default {
  request: (requestPath = '', method = 'GET', data) => {
    if (!API_URL) {
      throw new Error('Please define an API_URL in .env');
    }

    return axios({
      method: method,
      url: createApiUrl(API_URL, requestPath),
      data: data
    });
  }
};
