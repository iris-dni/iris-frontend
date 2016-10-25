export default ({ routing, petitions, petition }) => {
  const hasRoute = routing.locationBeforeTransitions &&
    routing.locationBeforeTransitions.pathname;

  if (hasRoute && hasRoute.indexOf('/petitions') > -1) {
    return petitions.currentCity;
  }

  if (petition.city) {
    return petition.city.data;
  }

  return {};
};
