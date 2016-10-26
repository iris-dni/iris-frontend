import React from 'react';
import styles from './petition-widget-header.scss';
import Header from 'components/Header';
import WidgetTitle from 'components/WidgetTitle';
import PetitionTags from 'containers/PetitionTags';
import PetitionInfo from 'containers/PetitionInfo';
import PetitionProgress from 'containers/PetitionProgress';
import PetitionStats from 'containers/PetitionStats';

const PetitionWidgetHeader = ({ title }) => (
  <Header padding>
    <div className={styles.tags}>
      <PetitionTags />
    </div>
    <WidgetTitle title={title} />
    <div className={styles.info}>
      <PetitionInfo />
      <PetitionProgress />
      <PetitionStats />
    </div>
  </Header>
);

export default PetitionWidgetHeader;
