export default (id, fullURL) => {
  let link = ['petitions', id];

  if (fullURL) {
    link.unshift(process.env.BASE_URL);
  } else {
    link[0] = `/${link[0]}`;
  }

  return link.join('/');
};
