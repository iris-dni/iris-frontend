import crypto from 'crypto';
import encodeParams from 'helpers/encodeParams';
import { omit } from 'lodash/object';

export default (request, reply) => {
  const hmac = crypto.createHmac('sha1', process.env.IMAGE_PROXY_KEY || 'irisImageProxy');
  const { query } = request;
  const domain = query.domain;

  // Create query string, removed path
  const queryString = omit(query, 'domain');
  // Always respect image rotations
  queryString.deg = 'auto';
  queryString.op = 'rotate,resize';
  // Encode query string for signature
  const encodedQueryString = encodeParams(queryString);

  // Return 404 if if no domain or url params are given
  if (!query.domain || !query.url) {
    return reply('Image not found: please specify domain and url as params').code(404);
  }

  // Warn ion console if no dimensions given
  if (isNaN(query.w) && isNaN(query.h)) {
    console.warn('You must specify at least one dimension param for image', query.url); // eslint-disable-line no-console
  }

  // Create image signature
  hmac.write(encodedQueryString);
  hmac.end();
  const imageSignature = hmac.read().hexSlice();

  // Join query string with signature
  queryString.sig = imageSignature;
  // Create full signed image url and redirect
  const signedImage = [domain, encodeParams(queryString)].join('?');

  reply.redirect(signedImage).code(301);
};
