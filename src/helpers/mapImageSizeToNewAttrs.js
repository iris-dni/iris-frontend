import calculateImageHeight from 'helpers/calculateImageHeight';

export default (size = 0, attrs = {}) => (
  size ? {
    w: parseInt(size, 10),
    h: calculateImageHeight(size, attrs)
  } : {}
);
