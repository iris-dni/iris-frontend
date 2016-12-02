import crypto from 'crypto';
import encodeParams from 'helpers/encodeParams';
import { omit, mapKeys } from 'lodash/object';

export default (request, reply) => {
  const hmac = crypto.createHmac('sha1', process.env.IMAGE_PROXY_KEY || 'irisImageProxy');
  const { query } = request;

  // Annoying, HAPI doesn't seem to decode query params so we get
  // something like this in request.query:
  // { 'amp;url': '/4891e30ddceb44008b252cb5ff9ac6bc' }
  // This helper fixes this
  const sanitzedQuery = mapKeys(query, (value, key) => {
    return key.substr(0, 4) === 'amp;' ? key.substring(4) : key;
  });

  const domain = sanitzedQuery.domain;

  // Create query string, removed path
  const queryString = omit(sanitzedQuery, 'domain');
  // Always respect image rotations
  queryString.deg = 'auto';
  queryString.op = 'rotate,resize';
  // Encode query string for signature
  const encodedQueryString = encodeParams(queryString);

  // Return 404 if if no domain or url params are given
  if (!sanitzedQuery.domain || !sanitzedQuery.url) {
    return reply('Image not found: please specify domain and url as params').code(404);
  }

  // Warn ion console if no dimensions given
  if (isNaN(sanitzedQuery.w) && isNaN(sanitzedQuery.h)) {
    console.warn('You must specify at least one dimension param for image', sanitzedQuery.url); // eslint-disable-line no-console
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
