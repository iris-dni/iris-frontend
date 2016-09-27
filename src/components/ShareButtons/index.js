import React from 'react';
import styles from './share-buttons.scss';
import ButtonLink from 'components/ButtonLink';
import ButtonIcon from 'components/ButtonIcon';

const ShareButtons = ({ openPopup, buttons = [] }) => (
  <div className={styles.root}>
    <ul className={styles.list}>
      {buttons.map(button => (
        <li className={styles.item} key={button.brand}>
          <ButtonLink block external
            onClick={openPopup.bind(this, button.href)}
            href={button.href}
            size={'compact'}
            brand={button.brand}>
            <ButtonIcon id={button.icon} fill={'Dark'}>
              {button.label}
            </ButtonIcon>
          </ButtonLink>
        </li>
      ))}
    </ul>
  </div>
);

export default ShareButtons;
