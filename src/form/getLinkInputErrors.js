import settings from 'settings';
import isLink from 'helpers/isLink';

export default function (currentValue, links) {
  let error = '';
  const LINKS_SETTINGS = settings.petitionFields.links;
  const MAX_LINKS = LINKS_SETTINGS.maxLinks;

  if (!isLink(currentValue)) {
    error = LINKS_SETTINGS.invalidLinkFormat;
  } else if (links.length >= MAX_LINKS) {
    error = LINKS_SETTINGS.invalidLinkCount.replace('%x', MAX_LINKS);
  } else if (links.filter(link => (currentValue === link.url)).length) {
    error = LINKS_SETTINGS.invalidSimilarLink;
  }

  return error;
}
