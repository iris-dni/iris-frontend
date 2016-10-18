export default (styles, classes) => classes
  .map(item => item && styles[item])
  .join(' ');
