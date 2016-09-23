import getPetitionOwner from 'selectors/petitionOwner';
import getPetitionCity from 'selectors/petitionCity';
import getPetitionURL from 'helpers/getPetitionURL';
import getPetitionStartDate from 'helpers/getPetitionStartDate';

export default (petition = {}) => ([
  {
    property: 'og:title',
    content: petition.title
  },
  {
    property: 'og:description',
    content: petition.description.replace(/\n/g, ' ')
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
