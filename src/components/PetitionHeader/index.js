import React from 'react';
import styles from './petition-header.scss';
import Heading1 from 'components/Heading1';

const PetitionHeader = ({ title, city, dateRange }) => (
  <header className={styles.root}>
    <div className={styles['heading-wrap']}>
      <Heading1 text={title} />
    </div>
    <p>{city}</p>
    <p>{dateRange}</p>
  </header>
);

export default PetitionHeader;
