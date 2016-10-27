import React from 'react';
import styles from './petition-widget-header.scss';
import Header from 'components/Header';
import PetitionTags from 'containers/PetitionTags';
import PetitionProgress from 'containers/PetitionProgress';
import PetitionStats from 'containers/PetitionStats';
import WidgetTitle from 'widgets/components/PetitionWidgetTitle';
import PetitionWidgetInfo from 'widgets/containers/PetitionWidgetInfo';

const PetitionWidgetHeader = ({ title }) => (
  <div className={styles.root}>
    <Header>
      <div className={styles.tags}>
        <PetitionTags />
      </div>
      <WidgetTitle title={title} />
      <div className={styles.info}>
        <PetitionWidgetInfo />
        <PetitionProgress />
        <PetitionStats />
      </div>
    </Header>
  </div>
);

export default PetitionWidgetHeader;
