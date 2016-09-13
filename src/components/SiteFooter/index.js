import React from 'react';
import settings from 'settings';
import Container from 'components/Container';
import styles from './site-footer.scss';

const SiteFooter = () => {
  return (
    <footer className={styles.root}>
      <Container>
        <span>{settings.footer.copyright}</span>
      </Container>
    </footer>
  );
};

export default SiteFooter;
