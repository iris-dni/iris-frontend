export default (buttons = [], isTouch) => buttons
  .filter(button => isTouch || !isTouch && button.brand !== 'whatsapp');
