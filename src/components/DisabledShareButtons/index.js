import React from 'react';
import settings from 'settings';
import styles from 'components/ShareButtons/share-buttons.scss';
import FakeButton from 'components/FakeButton';
import ButtonIcon from 'components/ButtonIcon';

const buttons = [
  {
    id: 'Facebook',
    label: settings.shareButtons.facebook.label
  },
  {
    id: 'Twitter',
    label: settings.shareButtons.twitter.label
  },
  {
    id: 'Email',
    label: settings.shareButtons.email.label
  },
  {
    id: 'Link',
    label: settings.shareButtons.link.label
  },
  {
    id: 'Embed',
    label: settings.shareButtons.embed.label
  }
];

const DisabledShareButtons = () => (
  <ul className={styles.list}>
    {buttons.map(button => (
      <li className={styles.item} key={button.id}>
        <FakeButton disabled block size={'compact'}>
          <ButtonIcon id={button.id} modifier={'dimmed'}>
            {button.label}
          </ButtonIcon>
        </FakeButton>
      </li>
    ))}
  </ul>
);

export default DisabledShareButtons;
