import createSrcSet from 'helpers/createSrcSet';

export default (src = '', srcSet = [], attrs = {}, sizes = '') => {
  if (srcSet.length) {
    return {
      srcSet: createSrcSet(src, attrs, srcSet),
      sizes: sizes
    };
  }

  return {};
};
