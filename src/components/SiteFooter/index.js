import React from 'react';
import styles from './site-footer.scss';
import settings from 'settings';
import CallToAction from 'components/CallToAction';
import SiteCopyright from 'components/SiteCopyright';

const showFooterCTA = (section) => {
  switch (section) {
    case 'AboutContainer':
    case 'ImprintContainer':
    case 'PetitionsContainer':
    case 'PetitionContainer':
      return true;
    default:
      return false;
  }
};

const SiteFooter = ({ section }) => (
  <footer className={styles.root}>
    {showFooterCTA(section) === true &&
      <CallToAction theme={'secondary'} {...settings.createCTA} />
    }
    <SiteCopyright />
  </footer>
);

export default SiteFooter;
