import settings from 'settings';

export default (author = '') => author
? settings.authorLabel.replace('%a', author)
: '';
