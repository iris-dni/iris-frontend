import encodeParams from 'helpers/encodeParams';

export default (baseUrl = '', params) => {
  const splitUrl = baseUrl.split('?');
  const domain = splitUrl.shift();
  const query = splitUrl.pop();
  const encodedParams = encodeParams(params);
  const queryString = query + `${encodedParams ? '&' + encodedParams : ''}`;
  return [
    '/images',
    `?domain=${domain}`,
    `&${queryString}`
  ].join('');
};
