export default (params) => {
  const { mailto, subject, body } = params;

  const target = 'mailto:__MAILTO__?subject=__SUBJECT__&body=__BODY__'
    .replace('__MAILTO__', (mailto || ''))
    .replace('__SUBJECT__', (subject || ''))
    .replace('__BODY__', (body || ''));

  return encodeURI(target);
};
