import render from './render';
import mentions from 'services/api/repositories/mentions';

// Middleware for tracking widget views

export default (request, reply) => {
  const petitionId = request.params.id;
  const referrer = request.query.ref;

  // track the page view
  if (petitionId && referrer) {
    mentions.track(petitionId, referrer);
  }

  // pass rendering of the widget on to the default render handler
  render(request, reply, 'widget');
};
