import baseUrl from 'helpers/baseUrl';

export default (id) => {
  const referrer = window.location.href;

  return `${baseUrl()}/embed/${id}?ref=${referrer}`;
};
