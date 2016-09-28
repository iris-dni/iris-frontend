import settings from 'settings';
import isLink from 'helpers/isLink';

export default function (currentValue, links) {
  let error = '';
  const MAX_LINKS = settings.petitionFields.links.maxLinks;

  if (!isLink(currentValue)) {
    error = settings.petitionFields.links.invalidLinkFormat;
  } else if (links.length >= MAX_LINKS) {
    error = settings.petitionFields.links.invalidLinkCount
      .replace('%x', MAX_LINKS);
  } else if (links.filter(link => (currentValue === link.url)).length) {
    error = settings.petitionFields.links.invalidSimilarLink;
  }

  return error;
}
