import Postmate from 'postmate';

export default (widget) => {
  console.log(widget.scrollHeight);
  const handshake = new Postmate.Model({
    height: () => widget.scrollHeight
  });

  // When parent <-> child handshake is complete,
  // events may be emitted to the parent
  return handshake.then(parent => {
    parent.emit('some-event', 'Hello, World!');
  });
};
