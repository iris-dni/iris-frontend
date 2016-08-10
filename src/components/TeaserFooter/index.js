import React from 'react';
import settings from 'settings';
import styles from './teaser-footer.scss';
import Dial from 'components/Dial';
import TeaserInfo from 'components/TeaserInfo';

const TeaserFooter = ({ info, dialTime, dialSupporters }) => (
  <footer className={styles.root}>
    <div className={styles.info}>
      <TeaserInfo {...info} />
    </div>
    <div className={styles.dials}>
      <div className={styles['first-dial']}>
        <Dial
          {...dialTime}
          icon={'clock'}
          caption={settings.teaserDaysRemaining}
        />
      </div>
      <div className={styles.dial}>
        <Dial
          {...dialSupporters}
          icon={'signature'}
          caption={settings.teaserSupportersText}
        />
      </div>
    </div>
  </footer>
);

export default TeaserFooter;
