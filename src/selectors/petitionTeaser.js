import getAuthorLabel from 'helpers/getAuthorLabel';
import getPetitionMetrics from './petitionMetrics';
import petitionCity from './petitionCity';
import petitionOwner from './petitionOwner';
import petitionWinning from './petitionWinning';

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
    metrics: getPetitionMetrics(petition),
    winning: petitionWinning(petition)
  };
};
