import Postmate from 'postmate';
import baseUrl from 'helpers/baseUrl';

const setIframeAttributes = (child) => {
  child.frame.setAttribute('width', '100%');
  child.frame.setAttribute('frameborder', 0);
  child.frame.setAttribute('scrolling', 'no');
  child.frame.setAttribute('horizontalscrolling', 'no');
  child.frame.setAttribute('verticalscrolling', 'no');
};

const fetchHeight = (child) => {
  child.get('height')
    .then(height =>
      (child.frame.style.height = `${height}px`)
    );
};

// Kick off the handshake with the iFrame
const handshake = new Postmate({
  container: document.getElementById('petition-widget'), // Element to inject frame into
  url: `${baseUrl()}/embed/7k3vv` // Page to load, must have postmate.js. This will also be the origin used for communication.
});

// When parent <-> child handshake is complete, data may be requested from the child
handshake.then(child => {
  setIframeAttributes(child);
  fetchHeight(child);

  // Listen to a particular event from the child
  child.on('resize', data => console.log(data)); // Logs "Hello, World!"
});
