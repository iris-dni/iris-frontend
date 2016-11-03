import React from 'react';
import styles from './image.scss';
import createImageUrl from 'helpers/createImageUrl';

const Image = ({ src, alt, attrs = {}, isPortrait }) => (
  <img className={styles.root}
    src={createImageUrl(src, attrs)}
    alt={alt || ''}
  />
);

export default Image;
