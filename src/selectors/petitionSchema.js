import getPetitionStartDate from 'selectors/petitionStartDate';
import getPetitionOwner from 'selectors/petitionOwner';

export default (petition = {}) => ({
  '@context': 'http://schema.org',
  '@type': 'Question',
  'name': petition.title,
  'upvoteCount': petition.supporters.amount,
  'text': petition.description,
  'dateCreated': getPetitionStartDate(petition.dc || {}),
  'author': getPetitionOwner(petition),
  'suggestedAnswer': {
    '@type': 'Answer',
    'upvoteCount': petition.supporters.amount,
    'text': petition.suggested_solution,
    'dateCreated': getPetitionStartDate(petition.dc || {}),
    'author': getPetitionOwner(petition)
  }
});
