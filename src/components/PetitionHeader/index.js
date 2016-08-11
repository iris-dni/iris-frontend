import React from 'react';
import styles from './petition-header.scss';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import PetitionInfo from 'components/PetitionInfo';
import PetitionStats from 'components/PetitionStats';
import ProgressBar from 'components/ProgressBar';

const PetitionHeader = ({ title, info, metrics }) => (
  <header className={styles.root}>
    <div className={styles.heading}>
      <Heading1 text={title} />
    </div>
    <div className={styles.info}>
      <PetitionInfo {...info} />
      {
        metrics.supportersMetric &&
        metrics.supportersMetric.votingActive &&
          <div className={styles.progress}>
            <ProgressBar
              animated
              percentage={metrics.supportersMetric.percentage}
              aria={metrics.supportersMetric.aria}
            />
            <PetitionStats {...metrics.supportersMetric} />
          </div>
      }
    </div>
  </Header>
);

export default PetitionHeader;
