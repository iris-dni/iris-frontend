export default (page, qs) => {
  return `/petitions/page/${page}${qs ? `?${qs}` : ''}`;
};
