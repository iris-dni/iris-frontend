import settings from 'settings';
import isLink from 'helpers/isLink';
import stripProtocolFromURL from 'helpers/stripProtocolFromURL';

export default (currentValue, links, config) => {
  let error = '';
  const LINKS_SETTINGS = settings.petitionFields.links;
  const MAX_LINKS = config.maxItems;

  console.log(currentValue, isLink(currentValue));

  if (!isLink(currentValue)) {
    error = LINKS_SETTINGS.invalidLinkFormat;
  } else if (links.length >= MAX_LINKS) {
    error = LINKS_SETTINGS.invalidLinkCount.replace('%x', MAX_LINKS);
  } else if (links.filter(link => stripProtocolFromURL(currentValue).toLowerCase() ===
      stripProtocolFromURL(link.url).toLowerCase()
    ).length) {
    error = LINKS_SETTINGS.invalidSimilarLink;
  }

  return error;
};
