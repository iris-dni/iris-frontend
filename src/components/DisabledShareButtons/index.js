import React from 'react';
import settings from 'settings';
import styles from 'components/ShareButtons/share-buttons.scss';
import FakeButton from 'components/FakeButton';
import ButtonIcon from 'components/ButtonIcon';

const DisabledShareButtons = () => (
  <ul className={styles.list}>
    <li className={styles.item}>
      <FakeButton disabled block size={'compact'}>
        <ButtonIcon id={'Facebook'} modifier={'dimmed'}>
          {settings.shareButtons.facebook.label}
        </ButtonIcon>
      </FakeButton>
    </li>
    <li className={styles.item}>
      <FakeButton disabled block size={'compact'}>
        <ButtonIcon id={'Twitter'} modifier={'dimmed'}>
          {settings.shareButtons.twitter.label}
        </ButtonIcon>
      </FakeButton>
    </li>
    <li className={styles.item}>
      <FakeButton disabled block size={'compact'}>
        <ButtonIcon id={'Email'} modifier={'dimmed'}>
          {settings.shareButtons.email.label}
        </ButtonIcon>
      </FakeButton>
    </li>
    <li className={styles.item}>
      <FakeButton disabled block size={'compact'}>
        <ButtonIcon id={'Link'} modifier={'dimmed'}>
          {settings.shareButtons.link.label}
        </ButtonIcon>
      </FakeButton>
    </li>
  </ul>
);

export default DisabledShareButtons;
