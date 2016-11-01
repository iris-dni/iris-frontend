import getAuthorLabel from 'helpers/getAuthorLabel';
import getPetitionMetrics from './petitionMetrics';
import petitionCity from './petitionCity';
import petitionOwner from './petitionOwner';
import getPetitionWinning from './petitionWinning';
import getPetitionResponse from './petitionResponse';
import getPetitionImage from './petitionImage';

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
    image: getPetitionImage(petition),
    tags: {
      winner: getPetitionWinning(petition),
      response: getPetitionResponse(petition)
    }
  };
};
