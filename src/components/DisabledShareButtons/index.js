import React from 'react';
import { translation } from 'translations';
import styles from 'components/ShareButtons/share-buttons.scss';
import FakeButton from 'components/FakeButton';
import ButtonIcon from 'components/ButtonIcon';

const buttons = [
  {
    id: 'Facebook',
    label: translation('shareButtons.facebook.label')
  },
  {
    id: 'Twitter',
    label: translation('shareButtons.twitter.label')
  },
  {
    id: 'Email',
    label: translation('shareButtons.email.label')
  },
  {
    id: 'Link',
    label: translation('shareButtons.link.label')
  },
  {
    id: 'Embed',
    label: translation('shareButtons.embed.label')
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
