import { get } from 'lodash/object';

export default (image) => image.data &&
  get(image, 'data.info.height', 0) > get(image, 'data.info.width', 0);
