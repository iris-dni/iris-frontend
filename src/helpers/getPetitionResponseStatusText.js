import settings from 'settings';

export default ({ pending, amount, required, daysPending, name }) => {
  const key = pending ? 'pending' : 'arrived';
  const link = !pending ? `\n\n[${settings.petitionResponseStatus.link}](#response).` : '';

  return settings.petitionResponseStatus[key].text
    .replace('%amount', amount.toLocaleString(settings.locale))
    .replace('%required', required.toLocaleString(settings.locale))
    .replace('%daysPending', daysPending.toLocaleString(settings.locale))
    .replace('%name', name)
    .concat(link);
};