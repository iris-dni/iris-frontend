import React from 'react';
import styles from './petition-widget.scss';
import WidgetBranding from 'widgets/components/WidgetBranding';
import PetitionWidgetTitle from 'widgets/components/PetitionWidgetTitle';
import PetitionWidgetInfo from 'widgets/components/PetitionWidgetInfo';
import PetitionWidgetProgress from 'widgets/components/PetitionWidgetProgress';
import PetitionWidgetStats from 'widgets/components/PetitionWidgetStats';
import PetitionWidgetSupportButton from 'widgets/components/PetitionWidgetSupportButton';

const PetitionWidget = ({
  id,
  title,
  info,
  stats,
  progress
}) => (
  <article className={styles.root}>
    <div className={styles.upper}>
      <img className={styles.image} src={'https://placeimg.com/800/400/arch'} />
    </div>
    <div className={styles.content}>
      <PetitionWidgetTitle title={title} />
      <div className={styles.info}>
        <PetitionWidgetInfo {...info} />
        <PetitionWidgetProgress {...progress} />
        <PetitionWidgetStats
          total={stats.supportersMetric.figure}
          required={stats.supportersMetric.total}
          daysLeft={stats.timeMetric.figure}
        />
      </div>
      <PetitionWidgetSupportButton petition={{ id: id }} />
      <WidgetBranding />
    </div>
  </article>
);

export default PetitionWidget;
