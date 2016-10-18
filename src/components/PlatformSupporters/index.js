import React from 'react';
import settings from 'settings';
import PageTitle from 'components/PageTitle';
import Paragraph from 'components/Paragraph';
import styles from './platform-supporters.scss';

const PlatformSupporters = () => (
  <div>
    <div className={styles.top}>
      <PageTitle
        title={settings.imprint.supporters.title}
        centered
      />
      <Paragraph>
        {settings.imprint.supporters.text}
      </Paragraph>
    </div>
    <div className={styles.bottom}>
      {settings.platformSupporters.map(supporter =>
        <img key={supporter.name} className={styles.image} src={supporter.imageUrl} alt={supporter.name} />
      )}
    </div>
  </div>
);

export default PlatformSupporters;
