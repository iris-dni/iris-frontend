import React from 'react';
import styles from './page-title.scss';
import Heading1 from 'components/Heading1';
import IntroParagraph from 'components/IntroParagraph';

const PageTitle = ({ title, isWidget, intro, centered, children }) => (
  <div className={centered ? styles.centered : styles.default}>
    {isWidget &&
      <div className={styles.ellipsis}>
        <div className={styles['widget-title']}>
          <Heading1 text={title} />
        </div>
      </div>
    }
    {!isWidget &&
      <div className={styles.title}>
        <Heading1 text={title} />
      </div>
    }
    {intro &&
      <div className={styles.intro}>
        <IntroParagraph text={intro} />
      </div>
    }
    {children &&
      <div className={styles.lower}>
        {children}
      </div>
    }
  </div>
);

export default PageTitle;
