import React from 'react';
import styles from './image.scss';
import createSignedImageUrl from 'helpers/createSignedImageUrl';

const Image = ({ src, alt, attrs }) => (
  <img className={styles.root}
    src={attrs ? createSignedImageUrl(src, attrs) : src}
    alt={alt || ''}
  />
);

export default Image;
