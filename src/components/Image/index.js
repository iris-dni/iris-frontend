import React from 'react';
import styles from './image.scss';
import createSignedImageUrl from 'helpers/createSignedImageUrl';
import createSrcSet from 'helpers/createSrcSet';

const Image = ({ src, srcSet = [], attrs, sizes, alt }) => (
  <img className={styles.root}
    src={attrs ? createSignedImageUrl(src, attrs) : src}
    srcSet={srcSet.length ? createSrcSet(src, attrs, srcSet) : ''}
    sizes={sizes || ''}
    alt={alt || ''}
  />
);

export default Image;
