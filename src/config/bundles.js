import getIncludedAssetPath from 'helpers/getIncludedAssetPath';

export default () => {
  const stylesheets = [];

  const javascripts = [
    getIncludedAssetPath('client.js')
  ];

  if (process.env.NODE_ENV === 'production') {
    stylesheets.push(
      getIncludedAssetPath('styles.css')
    );
  }

  return { javascripts, stylesheets };
};
