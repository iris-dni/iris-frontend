import axios from 'axios';

const API_URL = process.env.API_URL;

export default {
  request: (requestPath = '', method = 'GET', data) => {
    return axios({
      method: method,
      url: API_URL + requestPath,
      data: data
    });
  }
}
