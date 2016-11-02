import React from 'react';
import styles from './image.scss';
import createImageUrl from 'helpers/createImageUrl';

const Image = ({ src, alt, attrs = {}, isPortrait }) => (
  <img className={isPortrait ? styles.portrait : styles.landscape}
    src={createImageUrl(src, attrs)}
    alt={alt || ''}
  />
);

export default Image;
