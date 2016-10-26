import React from 'react';
import styles from './petition-widget-header.scss';
import Header from 'components/Header';
import WidgetTitle from 'components/WidgetTitle';
import PetitionTags from 'containers/PetitionTags';
import PetitionWidgetInfo from 'containers/widget/PetitionWidgetInfo';
import PetitionProgress from 'containers/PetitionProgress';
import PetitionStats from 'containers/PetitionStats';

const PetitionWidgetHeader = ({ title }) => (
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
);

export default PetitionWidgetHeader;
