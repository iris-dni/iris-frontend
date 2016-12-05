import React from 'react';
import styles from './image-container.scss';
import Image from 'components/Image';

const getPaddingForImage = (attrs = {}) => (attrs.h / attrs.w) * 100;

const ImageContainer = (props) => (
  <div className={styles.root} style={{ paddingTop: getPaddingForImage(props.attrs) + '%' }}>
    <div className={styles.inner}>
      <Image {...props} />
    </div>
  </div>
);

export default ImageContainer;
