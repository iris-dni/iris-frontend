import React from 'react';
import styles from './petition-widget.scss';
import WidgetBranding from 'widgets/components/WidgetBranding';
import PetitionWidgetHeader from 'widgets/containers/PetitionWidgetHeader';
import PetitionWidgetSupportButton from 'widgets/containers/PetitionWidgetSupportButton';

const PetitionWidget = () => (
  <article className={styles.root}>
    <PetitionWidgetHeader />
    <PetitionWidgetSupportButton />
    <WidgetBranding />
  </article>
);

export default PetitionWidget;
