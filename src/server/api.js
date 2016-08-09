import createApiUrl from 'helpers/createApiUrl';

const API_URL = process.env.API_URL;

const mapApiUri = (request, callback) => {
  const requestPath = request.params.path + request.url.search;
  const uri = (createApiUrl(API_URL, requestPath));
  callback(null, uri);
};

export default (request, reply) => {
  reply.proxy({
    mapUri: mapApiUri
  });
};
