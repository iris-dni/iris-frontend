export default (links) => {
  return links && links
    .filter(link => link)
    .map(link => ({
      url: link.data ? link.data.url : link.url,
      og: link.data ? link.data.og : link.og
    }));
};
