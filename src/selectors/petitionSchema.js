import getPetitionStartDate from 'helpers/getPetitionStartDate';

export default (petition = {}) => ({
  '@context': 'http://schema.org',
  '@type': 'Question',
  'name': petition.title,
  'upvoteCount': petition.supporters.amount,
  'text': petition.description,
  'dateCreated': getPetitionStartDate(petition.dc || {}),
  'author': { /* todo */ },
  'suggestedAnswer': {
    '@type': 'Answer',
    'upvoteCount': petition.supporters.amount,
    'text': petition.suggested_solution,
    'dateCreated': getPetitionStartDate(petition.dc || {}),
    'author': { /* todo */ }
  }
});
