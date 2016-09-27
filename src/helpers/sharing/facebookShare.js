import settings from 'settings';

export default (url) => ({
  popup: true,
  href: encodeURI(
    'http://www.facebook.com/sharer/sharer.php' +
      '?u=' + url
  ),
  brand: 'facebook',
  icon: 'Facebook',
  label: settings.shareButtons.facebook.label
});
