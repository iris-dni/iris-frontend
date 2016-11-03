import getPetitionStartDate from 'selectors/petitionStartDate';
import getPetitionOwner from 'selectors/petitionOwner';
import getPetitionImage from 'selectors/petitionImage';
import createSignedImageUrl from 'helpers/createSignedImageUrl';
import imageDimensionsForWidth from 'helpers/imageDimensionsForWidth';

export default (petition = {}) => {
  const petitionImage = getPetitionImage(petition);
  const petitionImageObject = petition.images && petition.images[0];
  const petitionImageSrc = petitionImage && petitionImage.src;

  return Object.assign({}, {
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
  }, petitionImageSrc ? {
    '@type': 'ImageObject',
    'url': createSignedImageUrl(petitionImageSrc, { w: 800 }),
    ...imageDimensionsForWidth(petitionImageObject, 800)
  } : {});
};
