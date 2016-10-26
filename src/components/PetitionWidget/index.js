import React from 'react';
import styles from './petition-widget.scss';
import Container from 'components/Container';
import Section from 'components/Section';
import WidgetBranding from 'components/WidgetBranding';
import WidgetSupportButton from 'containers/widget/WidgetSupportButton';
import PetitionWidgetHeader from 'containers/widget/PetitionWidgetHeader';

const PetitionWidget = () => (
  <article className={styles.root}>
    <Section>
      <Container>
        <PetitionWidgetHeader />
        <WidgetSupportButton />
        <WidgetBranding />
      </Container>
    </Section>
  </article>
);

export default PetitionWidget;
