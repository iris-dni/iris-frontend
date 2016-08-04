export default (petition) => {
  return JSON.stringify({
    '@context': 'http://schema.org',
    '@type': 'NewsArticle'
  });
};
