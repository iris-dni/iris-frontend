export default (petition = {}) => {
  return !!petition.state && petition.state.parent === 'supportable';
};
