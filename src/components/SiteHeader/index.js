import React from 'react';
import Container from 'components/Container';
import Navigation from 'components/Navigation';
import styles from './site-header.scss';

const SiteHeader = () => (
  <header className={styles.root}>
    <Container>
      <Navigation />
    </Container>
  </header>
);

export default SiteHeader;
