import getPetitionSchema from './petitionSchema';

export default (petition = {}) => {
  if (!petition || !petition.id) {
    return {};
  }

  return {
    ...petition,
    browserTitle: petition.title,
    schema: getPetitionSchema(petition)
  };
};
