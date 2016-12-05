import React from 'react';
import styles from './petition-image.scss';
import ImageContainer from 'components/ImageContainer';
import mapImageSizeToNewAttrs from 'helpers/mapImageSizeToNewAttrs';

const PetitionImage = ({ src, alt, attrs, ratio }) => (
  src
  ? <div className={styles.root}>
    <ImageContainer
      src={src}
      alt={alt}
      attrs={mapImageSizeToNewAttrs(560, ratio)}
      srcSet={[480, 560, 960, 1120]}
      sizes={'(min-width: 600px) 560px, 100vw'}
    />
  </div>
  : null
);

export default PetitionImage;
