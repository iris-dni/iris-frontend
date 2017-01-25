/* global CustomEvent */
export const PAGEVIEW_EVENT_NAME = `${process.env.SITE_NAME || 'iris'}_pageview`;

export default () => {
  if (__CLIENT__) {
    // Register custom event
    const pageviewEvent = typeof CustomEvent !== 'undefined' && // Required as it’s not defined during tests.
      new CustomEvent(PAGEVIEW_EVENT_NAME);
    // Dispatch custom event on the window for tracking
    window.dispatchEvent(pageviewEvent);
  }
};
