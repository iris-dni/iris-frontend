import React from 'react';
import styles from './teaser-footer.scss';
import TeaserMetrics from 'components/TeaserMetrics';
import TeaserInfo from 'components/TeaserInfo';

const TeaserFooter = ({ city, owner, metrics }) => (
  <footer className={styles.root}>
    <div className={styles.info}>
      <TeaserInfo
        city={city}
        owner={owner}
      />
    </div>
    <div className={styles.metrics}>
      <TeaserMetrics {...metrics} />
    </div>
  </footer>
);

export default TeaserFooter;
