import settings from 'settings';

export default (petition = {}) => ([
  {
    name: 'twitter:card',
    content: 'summary'
  },
  {
    name: 'twitter:site',
    content: settings.twitterAccount
      ? '@' + settings.twitterAccount
      : ''
  },
  {
    name: 'twitter:title',
    content: petition.title
  },
  {
    name: 'twitter:description',
    content: petition.description &&
      petition.description.replace(/\n/g, ' ')
  }
]).filter(meta => meta.content);
