import getAuthorLabel from 'helpers/getAuthorLabel';
import getPetitionMetrics from './petitionMetrics';
import petitionCity from './petitionCity';

export default (petition = {}) => {
  if (!petition || !petition.id) {
    return {};
  }

  return {
    id: petition.id,
    link: `/petitions/${petition.id}`,
    title: petition.title,
    city: petitionCity(petition),
    owner: getAuthorLabel(petition.owner) || 'Max Mustermann',
    metrics: getPetitionMetrics(petition)
  };
};
