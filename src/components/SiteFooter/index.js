import React from 'react';
import settings from 'settings';
import CreateCTA from 'components/CreateCTA';
import Container from 'components/Container';
import styles from './site-footer.scss';

const SiteFooter = () => (
  <footer className={styles.root}>
    <CreateCTA {...settings.createCTA} />
    <div className={styles.copyright}>
      <Container>
        <span>{settings.footer.copyright}</span>
      </Container>
    </div>
  </footer>
);

export default SiteFooter;
