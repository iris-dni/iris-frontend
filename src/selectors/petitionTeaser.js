import getAuthorLabel from 'helpers/getAuthorLabel';
import getPetitionMetrics from './petitionMetrics';
import petitionCity from './petitionCity';
import petitionOwner from './petitionOwner';

export default (petition = {}) => {
  if (!petition || !petition.id) {
    return {};
  }

  return {
    id: petition.id,
    link: `/petitions/${petition.id}`,
    title: petition.title,
    city: petitionCity(petition),
    owner: getAuthorLabel(petitionOwner(petition)),
    metrics: getPetitionMetrics(petition)
  };
};
