import React from 'react';
import styles from './petition-widget.scss';
import WidgetBranding from 'widgets/components/WidgetBranding';
import ImageContainer from 'components/ImageContainer';
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
  image,
  info,
  stats,
  progress
}) => (
  <article className={styles.root}>
    {image &&
      <div className={styles.upper}>
        <ImageContainer
          {...image}
          attrs={{ w: 800, h: 400 }}
        />
      </div>
    }
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
