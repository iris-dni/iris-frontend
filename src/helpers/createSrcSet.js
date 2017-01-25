import createSignedImageUrl from 'helpers/createSignedImageUrl';
import mapImageSizeToNewAttrs from 'helpers/mapImageSizeToNewAttrs';

export default (src = '', attrs = {}, srcSet = []) => {
  const urlArray = srcSet.map(size => {
    return `${createSignedImageUrl(src, mapImageSizeToNewAttrs(size, attrs))} ${size}w`;
  });
  return urlArray.join(', ');
};
