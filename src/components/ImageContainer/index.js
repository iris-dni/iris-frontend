import React from 'react';
import styles from './image-container.scss';
import Image from 'components/Image';

const ImageContainer = (props) => (
  <div className={styles.root}>
    <div className={styles.inner}>
      <Image {...props} />
    </div>
  </div>
);

export default ImageContainer;
