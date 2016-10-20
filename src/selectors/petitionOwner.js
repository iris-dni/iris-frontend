export default (petition = {}) => {
  if (petition.owner && petition.owner.data) {
    return [
      petition.owner.data.firstname,
      petition.owner.data.lastname
    ].join(' ');
  }
  return '';
};
