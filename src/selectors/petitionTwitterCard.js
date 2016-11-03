import settings from 'settings';
import getPetitionImage from 'selectors/petitionImage';
import createSignedImageUrl from 'helpers/createSignedImageUrl';
import imageDimensionsForWidth from 'helpers/imageDimensionsForWidth';

export default (petition = {}) => {
  const petitionImage = getPetitionImage(petition);
  const petitionImageObject = petition.images && petition.images[0];
  const petitionImageSrc = petitionImage ? petitionImage.src : '';
  const twitterCardImage = createSignedImageUrl(petitionImageSrc, { w: 800 });
  const imageDimensions = twitterCardImage ? imageDimensionsForWidth(petitionImageObject, 800) : {};

  return [
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
      name: 'twitter:image',
      content: twitterCardImage
    },
    {
      name: 'twitter:image:width',
      content: imageDimensions.width
    },
    {
      name: 'twitter:image:height',
      content: imageDimensions.height
    },
    {
      name: 'twitter:description',
      content: petition.description &&
        petition.description.replace(/\n/g, ' ')
    }
  ].filter(meta => meta.content);
};
