import React from 'react';
import styles from './petition-header.scss';
import Heading1 from 'components/Heading1';

const PetitionHeader = ({ title }) => (
  <header className={styles.root}>
    <div className={styles['heading-wrap']}>
      <Heading1 text={title} />
    </div>
  </header>
);

export default PetitionHeader;
