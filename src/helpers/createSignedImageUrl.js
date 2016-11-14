import baseUrl from 'helpers/baseUrl';
import encodeParams from 'helpers/encodeParams';

export default (basePath, params = { op: 'noop' }) => {
  if (!basePath) {
    return '';
  }

  const splitPath = basePath.split('?');
  const domain = splitPath.shift();
  const query = splitPath.pop();
  const encodedParams = encodeParams(params);
  const queryString = query + `${encodedParams ? '&' + encodedParams : ''}`;

  return baseUrl([
    'images',
    `?domain=${domain}`,
    `&${queryString}`
  ].join(''));
};
