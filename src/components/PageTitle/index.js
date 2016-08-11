import React from 'react';
import styles from './page-title.scss';
import Heading1 from 'components/Heading1';

const PageTitle = ({ title, centered }) => (
  <div className={centered ? styles.centered : styles.default}>
    <Heading1 text={title} />
  </div>
);

export default PageTitle;
