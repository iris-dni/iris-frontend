import React from 'react';
import styles from './petition-widget-byline.scss';

const PetitionWidgetImage = ({ text }) => (
  <p className={styles.root}>
    {text}
  </p>
);

export default PetitionWidgetImage;
