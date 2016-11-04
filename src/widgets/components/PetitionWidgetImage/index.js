import React from 'react';
import styles from './petition-widget-image.scss';

const PetitionWidgetImage = ({ src, alt, link }) => (
  <a className={styles.root} href={link} rel={'noopener'} target={'_blank'}>
    <img className={styles.image} src={src} alt={alt || ''} />
  </a>
);

export default PetitionWidgetImage;
