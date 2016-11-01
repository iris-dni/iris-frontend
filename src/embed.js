// patches for IE
require('es6-object-assign').polyfill();
require('es6-promise').polyfill();
// Begin embed code
import Postmate from 'postmate';
import getPetitionEmbedUrl from 'widgets/helpers/getPetitionEmbedUrl';

const setIframeAttributes = (iframeElement) => {
  iframeElement.setAttribute('width', '100%');
  iframeElement.setAttribute('frameborder', 0);
  iframeElement.setAttribute('scrolling', 'no');
  iframeElement.setAttribute('horizontalscrolling', 'no');
  iframeElement.setAttribute('verticalscrolling', 'no');
};

const fetchHeight = (child) => {
  child
    .get('height')
    .then(height =>
      (child.frame.style.height = `${height}px`)
    );
};

const createWidget = (container) => {
  const id = container.dataset.petitionId;
  const url = getPetitionEmbedUrl(id);
  // Kick off the handshake with the iFrame
  const handshake = new Postmate({
    container, // Element to inject frame into
    url // Page to load, must have postmate.js. This will also be the origin used for communication.
  });

  // When parent <-> child handshake is complete, data may be requested from the child
  handshake.then(child => {
    setIframeAttributes(child.frame);
    fetchHeight(child);

    // Listen to a particular event from the child
    child.on('resize', () => fetchHeight(child));
  });
};

const initWidgets = () => {
  const widgetElements = document.getElementsByClassName('iris-petition-widget');
  const widgetsArray = Array.prototype.slice.call(widgetElements);
  widgetsArray.forEach((widgetElement) => {
    createWidget(widgetElement);
  });
};

initWidgets();
