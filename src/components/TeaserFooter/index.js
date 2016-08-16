import React from 'react';
import styles from './teaser-footer.scss';
import TeaserMetrics from 'components/TeaserMetrics';
import TeaserInfo from 'components/TeaserInfo';

const TeaserFooter = ({ info, metrics }) => (
  <footer className={styles.root}>
    <div className={styles.info}>
      <TeaserInfo {...info} />
    </div>
    <div className={styles.metrics}>
      <TeaserMetrics {...metrics} />
    </div>
  </footer>
);

export default TeaserFooter;
