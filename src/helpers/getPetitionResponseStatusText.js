import settings from 'settings';

export default ({ pending, total, required, daysPending, name }) => {
  const key = pending ? 'pending' : 'arrived';

  return settings.petitionResponseStatus[key].text
    .replace('%total', total)
    .replace('%required', required)
    .replace('%daysPending', daysPending)
    .replace('%name', name);
};
