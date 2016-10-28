export default ({ routing, petitions, petition }) => {
  const hasRoute = routing.locationBeforeTransitions &&
    routing.locationBeforeTransitions.pathname;

  // Only match filtered city on /petitions list page.
  // Those always contain a `:`
  if (hasRoute && hasRoute.indexOf(':') > -1) {
    return petitions.currentCity.tags;
  }

  if (petition.city && petition.city.data) {
    return petition.city.data.tags;
  }

  return [];
};
