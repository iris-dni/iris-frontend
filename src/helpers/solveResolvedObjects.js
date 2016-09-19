export default (petition, petitionResponse) => {
  // Get stuff we usually `resolve` via the endpoint
  const { city, owner } = petition;
  // Do this here because API does not return resolved
  // params on the `event/support` etc. endpoints
  return Object.assign({}, petitionResponse, { city, owner });
};
