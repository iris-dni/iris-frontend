export default (petition = {}) => ({
  '@context': 'http://schema.org',
  '@type': 'Question',
  'name': petition.title,
  'upvoteCount': petition.supporters.amount,
  'text': petition.description,
  'dateCreated': petition.dc.effective || petition.dc.created,
  'author': { /* todo */ },
  'suggestedAnswer': {
    '@type': 'Answer',
    'upvoteCount': petition.supporters.amount,
    'text': petition.suggested_solution,
    'dateCreated': petition.dc.effective || petition.dc.created,
    'author': { /* todo */ }
  }
});
