import settings from 'settings';

export default ({ url, text }) => ({
  popup: true,
  href: encodeURI(
    'http://www.twitter.com/share' +
      '?url=' + url +
      '&text=' + text
  ),
  brand: 'twitter',
  icon: 'Twitter',
  label: settings.shareButtons.twitter.label
});
