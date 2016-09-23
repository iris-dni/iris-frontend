import React from 'react';
import styles from './share-buttons.scss';
import SocialLink from 'components/SocialLink';

const ShareButtons = () => (
  <ul className={styles.root}>
    <li className={styles.item}>
      <SocialLink
        href={'#'}
        modifier={'facebook'}
        icon={'Facebook'}
        label={'Share on Facebook'}
      />
    </li>
    <li className={styles.item}>
      <SocialLink
        href={'#'}
        modifier={'twitter'}
        icon={'Twitter'}
        label={'Share on Twitter'}
      />
    </li>
    <li className={styles.item}>
      <SocialLink
        href={'#'}
        modifier={'whatsapp'}
        icon={'Whatsapp'}
        label={'Share via Whatsapp'}
      />
    </li>
    <li className={styles.item}>
      <SocialLink
        href={'#'}
        modifier={'email'}
        icon={'Email'}
        label={'Share via Email'}
      />
    </li>
  </ul>
);

export default ShareButtons;
