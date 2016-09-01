export default (location) => {
  if (typeof location === 'object') {
    const { pathname, search } = location;
    const queryParams = search ? decodeURIComponent(search) : '';
    return [pathname, queryParams].join('');
  }

  return location;
};
