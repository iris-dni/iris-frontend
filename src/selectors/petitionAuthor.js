import settings from 'settings';

export default ({ author }) => settings.authorLabel.replace('%a', (author || 'Max Mustermann'));
