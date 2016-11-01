import React from 'react';
import styles from './petition-widget.scss';
import WidgetBranding from 'widgets/components/WidgetBranding';
// import PetitionWidgetImage from 'widgets/components/PetitionWidgetImage';
import PetitionWidgetByline from 'widgets/components/PetitionWidgetByline';
import PetitionWidgetTitle from 'widgets/components/PetitionWidgetTitle';
import PetitionWidgetProgress from 'widgets/components/PetitionWidgetProgress';
import PetitionWidgetStats from 'widgets/components/PetitionWidgetStats';
import PetitionWidgetSupportButton from 'widgets/components/PetitionWidgetSupportButton';

const PetitionWidget = ({
  id,
  title,
  link,
  byline,
  info,
  stats,
  progress
}) => (
  <article className={styles.root}>
    {/* <div className={styles.upper}>
      <PetitionWidgetImage
        alt={title}
        link={link}
        src={'http://placehold.it/800x450'}
      />
    </div> */}
    <div className={styles.content}>
      <PetitionWidgetByline text={byline} />
      <PetitionWidgetTitle
        title={title}
        link={link}
      />
      <div className={styles.info}>
        <PetitionWidgetProgress {...progress} />
        <PetitionWidgetStats {...stats} />
      </div>
      <PetitionWidgetSupportButton link={link} />
      <WidgetBranding />
    </div>
  </article>
);

export default PetitionWidget;
