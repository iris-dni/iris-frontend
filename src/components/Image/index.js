import React from 'react';
import styles from './image.scss';

const Image = ({ src, alt }) => (
  <img className={styles.root} src={src} alt={alt || ''} />
);

export default Image;
