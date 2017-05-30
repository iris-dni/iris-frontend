import baseUrl from 'helpers/baseUrl';

export default (id, referrer = null) => {
  const refUrl = referrer || window.location.href;
  return baseUrl(`embed/${id}?ref=${refUrl}`);
};
