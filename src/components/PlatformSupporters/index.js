import React from 'react';
import settings from 'settings';
import PageTitle from 'components/PageTitle';
import styles from './platform-supporters.scss';

const PlatformSupporters = () => (
  <div>
    <div className={styles.top}>
      <PageTitle
        title={settings.imprint.supporters.title}
        centered
      />
      <p className={styles.text}>
        {settings.imprint.supporters.text}
      </p>
    </div>
    <div className={styles.bottom}>
      {settings.platformSupporters.map(supporter =>
        <img key={supporter.name} className={styles.image} src={supporter.imageUrl} alt={supporter.name} />
      )}
    </div>
  </div>
);

export default PlatformSupporters;
