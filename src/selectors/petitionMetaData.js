export default (petition = {}) => ([
  {
    name: 'description',
    content: petition.description &&
      petition.description.replace(/\n/g, ' ')
  }
]).filter(meta => meta.content);
