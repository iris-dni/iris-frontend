export default (links) => {
  return links && links
    .filter(link => link)
    .map(link => {
      if (!link.data && !link.url) {
        link = JSON.parse(link);
      }

      return {
        url: link.data ? link.data.url : link.url,
        og: link.data ? link.data.og : link.og
      };
    });
};
