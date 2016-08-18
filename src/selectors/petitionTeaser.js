import getPetitionAuthor from 'helpers/getPetitionAuthor';
import getPetitionMetrics from './petitionMetrics';

export default (petition = {}) => {
  if (!petition || !petition.id) {
    return {};
  }

  return {
    id: petition.id,
    link: `/petitions/${petition.id}`,
    title: petition.title,
    footer: {
      info: {
        city: petition.city,
        owner: getPetitionAuthor(petition.owner)
      },
      metrics: getPetitionMetrics(petition)
    }
  };
};
