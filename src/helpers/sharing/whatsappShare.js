import settings from 'settings';

export default (url) => ({
  href: encodeURI(
    'whatsapp://send' +
      '?text=' + url
  ),
  brand: 'whatsapp',
  icon: 'Whatsapp',
  label: settings.shareButtons.whatsapp.label
});
