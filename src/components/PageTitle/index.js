import React from 'react';
import styles from './page-title.scss';
import Heading1 from 'components/Heading1';
import IntroParagraph from 'components/IntroParagraph';

const PageTitle = ({ title, intro, centered }) => (
  <div className={centered ? styles.centered : styles.default}>
    <Heading1 text={title} />
    {intro &&
      <div className={styles.intro}>
        <IntroParagraph text={intro} />
      </div>
    }
  </div>
);

export default PageTitle;
