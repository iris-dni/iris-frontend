import React from 'react';
import styles from './image.scss';
import createSignedImageUrl from 'helpers/createSignedImageUrl';
import createResponsiveImageAttributes from 'helpers/createResponsiveImageAttributes';

const Image = ({ src, srcSet = [], attrs, sizes, alt }) => (
  <img className={styles.root}
    src={attrs ? createSignedImageUrl(src, attrs) : src}
    alt={alt || ''}

    {...createResponsiveImageAttributes(src, srcSet, attrs, sizes)}
  />
);

export default Image;
