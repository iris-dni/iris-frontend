import React from 'react';
import { setting } from 'settings';
import { translation } from 'translations';
import PageTitle from 'components/PageTitle';
import styles from './platform-supporters.scss';

const PlatformSupporters = () => (
  <div>
    <div className={styles.top}>
      <PageTitle
        title={translation('imprint.supporters.title')}
        centered
      />
      <p className={styles.text}>
        {translation('imprint.supporters.text')}
      </p>
    </div>
    <div className={styles.bottom}>
      {setting('platformSupporters', []).map(supporter =>
        <img key={supporter.name} className={styles.image} src={supporter.imageUrl} alt={supporter.name} />
      )}
    </div>
  </div>
);

export default PlatformSupporters;
