import settings from 'settings';

export default ({ pending, total, required, daysPending, name }) => {
  const key = pending ? 'pending' : 'arrived';

  return settings.petitionResponseStatus[key].text
    .replace('%total', total.toLocaleString(settings.locale))
    .replace('%required', required.toLocaleString(settings.locale))
    .replace('%daysPending', daysPending.toLocaleString(settings.locale))
    .replace('%name', name);
};
