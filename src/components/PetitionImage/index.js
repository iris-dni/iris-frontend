import React from 'react';
import styles from './petition-image.scss';
import Image from 'components/Image';

const PetitionImage = ({ src, alt }) => (
  src
  ? <div className={styles.root}>
    <Image src={src} alt={alt} attrs={{ w: 800 }} />
  </div>
  : null
);

export default PetitionImage;
