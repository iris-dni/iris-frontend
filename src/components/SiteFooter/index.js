import React from 'react';
import settings from 'settings';
import CreateCTA from 'components/CreateCTA';
import Container from 'components/Container';
import styles from './site-footer.scss';

const showFooterCTA = (section) => {
  switch (section) {
    case 'Imprint':
    case 'HomeContainer':
    case 'PetitionsContainer':
    case 'PetitionContainer':
      return true;
    default:
      return false;
  }
};

const SiteFooter = ({ section }) => (
  <footer className={styles.root}>
    {showFooterCTA(section) &&
      <CreateCTA {...settings.createCTA} />
    }
    <div className={styles.copyright}>
      <Container>
        <span>{settings.footer.copyright}</span>
      </Container>
    </div>
  </footer>
);

export default SiteFooter;
