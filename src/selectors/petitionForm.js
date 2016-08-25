export default (petition = {}) => {
  return {
    ...petition,
    persisted: !!petition.id,
    published: !!(petition.state && petition.state.parent === 'supportable')
  };
};
