import getIncludedAssetPath from 'helpers/getIncludedAssetPath';

export default (jsFile = 'client.js') => {
  const stylesheets = [];

  const javascripts = [
    getIncludedAssetPath(jsFile)
  ];

  if (process.env.NODE_ENV === 'production') {
    stylesheets.push(
      getIncludedAssetPath('styles.css')
    );
  }

  return { javascripts, stylesheets };
};
