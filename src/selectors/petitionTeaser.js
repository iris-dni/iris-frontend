import getAuthorLabel from 'helpers/getAuthorLabel';
import getPetitionMetrics from './petitionMetrics';

export default (petition = {}) => {
  if (!petition || !petition.id) {
    return {};
  }

  return {
    id: petition.id,
    link: `/petitions/${petition.id}`,
    title: petition.title,
    city: petition.city && petition.city.name,
    owner: getAuthorLabel(petition.owner) || 'Max Mustermann',
    metrics: getPetitionMetrics(petition)
  };
};
