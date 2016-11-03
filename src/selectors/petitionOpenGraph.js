import getPetitionOwner from 'selectors/petitionOwner';
import getPetitionCity from 'selectors/petitionCity';
import getPetitionImage from 'selectors/petitionImage';
import getPetitionURL from 'helpers/getPetitionURL';
import createSignedImageUrl from 'helpers/createSignedImageUrl';
import getPetitionStartDate from 'selectors/petitionStartDate';

export default (petition = {}) => ([
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
    content: createSignedImageUrl(
      getPetitionImage(petition).src,
      { w: 1200, h: 630 }
    )
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
].filter(meta => meta.content));
