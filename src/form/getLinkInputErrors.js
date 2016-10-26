import settings from 'settings';
import isLink from 'helpers/isLink';

export default (currentValue, links, config) => {
  let error = '';
  const LINKS_SETTINGS = settings.petitionFields.links;
  const MAX_LINKS = config.maxItems;

  if (!isLink(currentValue)) {
    error = LINKS_SETTINGS.invalidLinkFormat;
  } else if (links.length >= MAX_LINKS) {
    error = LINKS_SETTINGS.invalidLinkCount.replace('%x', MAX_LINKS);
  } else if (links.filter(link => currentValue.toLowerCase() === link.url.toLowerCase()).length) {
    error = LINKS_SETTINGS.invalidSimilarLink;
  }

  return error;
};
