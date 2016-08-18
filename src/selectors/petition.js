import getPetitionSchema from './petitionSchema';

export default (petition) => {
  if (!petition || !petition.id) {
    return {};
  }

  return {
    id: petition.id,
    browserTitle: petition.title,
    schema: getPetitionSchema(petition)
  };
};
