import pattern from 'helpers/pathPattern';
import ApiClient from 'services/api/client';

const mapping = {
  show: {
    path: '/petitions/:id',
    api: '/petitions(/:id)'
  }
};

const transform = (response) => {
  // transform the json response into the structure we need for the state here
  return response;
};

const request = (path) => {
  const response = ApiClient.request(apiPath(path));
  return transform(response);
};

const apiPath = (path) => {
  const params = pattern.match(path, mapping.show.path);
  return pattern.stringify(mapping.show.api, params);
};

export default {
  show: {
    path: mapping.show.path,
    request: request
  }
};
