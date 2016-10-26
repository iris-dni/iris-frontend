import React from 'react';
import styles from './petition-widget.scss';
import Container from 'components/Container';
import Section from 'components/Section';
import WidgetSupportButton from 'containers/WidgetSupportButton';

import PetitionHeader from 'containers/PetitionHeader';
import PetitionFooter from 'containers/PetitionFooter';

const PetitionWidget = () => (
  <article className={styles.root}>
    <Section theme={'grey'}>
      <Container>
        <PetitionHeader isWidget />
        <WidgetSupportButton />
      </Container>
    </Section>
    <Section theme={'grey-lightest'}>
      <Container>
        <PetitionFooter />
      </Container>
    </Section>
  </article>
);

export default PetitionWidget;
