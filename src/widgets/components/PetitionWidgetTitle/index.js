import React from 'react';
import styles from './petition-widget-title.scss';
import Heading1 from 'components/Heading1';

const PetitionWidgetTitle = ({ title, link }) => (
  <div className={styles.title}>
    <a className={styles.link} href={link} rel={'noopener'} target={'_blank'}>
      <Heading1 text={title} />
    </a>
  </div>
);

export default PetitionWidgetTitle;
