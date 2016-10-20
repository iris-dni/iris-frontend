import getPetitionSchema from './petitionSchema';
import getPetitionSupporters from './petitionSupporters';

export default (petition = {}) => {
  if (!petition || !petition.id) {
    return {};
  }

  return {
    ...petition,
    browserTitle: petition.title,
    schema: getPetitionSchema(petition),
    supporters: getPetitionSupporters(petition)
  };
};
