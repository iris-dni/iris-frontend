import getPetitionOwner from 'selectors/petitionOwner';
import getPetitionCity from 'selectors/petitionCity';
import getPetitionImage from 'selectors/petitionImage';
import createSignedImageUrl from 'helpers/createSignedImageUrl';
import getPetitionURL from 'helpers/getPetitionURL';
import getPetitionStartDate from 'selectors/petitionStartDate';
import baseUrl from 'helpers/baseUrl';
import settings from 'settings';

export default (petition = {}) => {
  const petitionImage = getPetitionImage(petition);
  const ogFallbackImage = settings.ogFallbackImage || undefined;
  const ogFallbackImagePath = ogFallbackImage ? baseUrl(ogFallbackImage) : '';
  const petitionImageSrc = petitionImage && petitionImage.src || undefined;
  const imageWidth = 1200;
  const imageHeight = 630;

  return [
    {
      property: 'og:title',
      content: petition.title
    },
    {
      property: 'og:description',
      content: petition.description &&
        petition.description.replace(/\n/g, ' ')
    },
    {
      property: 'og:image',
      content: createSignedImageUrl(petitionImageSrc, { w: imageWidth, h: imageHeight }) || ogFallbackImagePath
    },
    {
      property: 'og:image:width',
      content: imageWidth
    },
    {
      property: 'og:image:height',
      content: imageHeight
    },
    {
      property: 'og:url',
      content: getPetitionURL(petition.id)
    },
    {
      property: 'og:type',
      content: 'article'
    },
    {
      property: 'article:author',
      content: getPetitionOwner(petition)
    },
    {
      property: 'article:section',
      content: getPetitionCity(petition).label
    },
    {
      property: 'article:published_time',
      content: getPetitionStartDate(petition.dc || {})
    },
    {
      property: 'article:expiration_time',
      content: petition.dc && petition.dc.expires
    }
  ].filter(meta => meta.content);
};
