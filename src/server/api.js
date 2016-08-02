import createApiUrl from 'helpers/createApiUrl';

const API_URL = process.env.API_URL;

const mapApiUri = (request, callback) => {
  const uri = (createApiUrl(API_URL, request.params.path));
  callback(null, uri);
};

export default (request, reply) => {
  reply.proxy({
    mapUri: mapApiUri
  });
};
