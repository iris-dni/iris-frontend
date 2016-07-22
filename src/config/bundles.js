import getIncludedAssetPath from 'helpers/getIncludedAssetPath';

export default () => {
  let stylesheets;

  const javascripts = [
    getIncludedAssetPath('client.js')
  ];

  if (process.env.NODE_ENV === 'production') {
    stylesheets = [
      getIncludedAssetPath('styles.css')
    ];
  } else {
    stylesheets = [];
  }

  return { javascripts, stylesheets };
};
