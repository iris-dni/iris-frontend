import React from 'react';
import styles from './petition-image.scss';
import Image from 'components/Image';

const PetitionImage = (image) => (
  image && image.src
  ? <div className={styles.root}>
    <Image {...image} attrs={{ w: 800 }} />
  </div>
  : null
);

export default PetitionImage;
