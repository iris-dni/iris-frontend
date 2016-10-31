// Service for tracking widget embeds on the server
// Note: this should not be part of any frontend bundle

import ApiClient, { GET } from 'services/api/client';
import path from 'path';

const API_KEY = process.env.API_KEY;

export default {
  track: (id, url) => {
    const requestPath = path.join('/petition', id.toString(), '/mentions');
    const requestParams = {url: url};
    const requestHeader = {
      'X-IRIS-APIKEY': API_KEY
    };
    // TODO: enhance client to pass on request headers
    return ApiClient.request(requestPath, requestParams, GET, requestHeader);
  }
};
