import React from 'react';
import styles from './petition-image.scss';
import Image from 'components/Image';

const PetitionImage = ({ src, alt }) => (
  src
  ? <div className={styles.root}>
    <Image
      src={src}
      alt={alt}
      attrs={{ w: 560 }}
      srcSet={[480, 560, 960, 1120]}
      sizes={'(min-width: 600px) 560px, 100vw'}
    />
  </div>
  : null
);

export default PetitionImage;
