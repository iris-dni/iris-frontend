export default (size = 0, attrs = {}) => (
  size ? {
    w: parseInt(size, 10),
    h: attrs.h
      ? parseInt(size, 10) / parseInt(attrs.w, 10) * parseInt(attrs.h, 10)
      : ''
  } : {}
);
