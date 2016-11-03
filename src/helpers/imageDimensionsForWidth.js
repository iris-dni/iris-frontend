import { get } from 'lodash/object';

export default (image, newWidth) => {
  const rawWidth = get(image, 'data.info.width', 1);
  const rawHeight = get(image, 'data.info.height', 1);
  const newHeight = Math.round(rawHeight / rawWidth * newWidth);

  return {
    width: rawWidth > newWidth ? newWidth : rawWidth,
    height: Math.min(newHeight, rawHeight)
  };
};
