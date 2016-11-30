import React from 'react';
import settings from 'settings';
import styles from './respond-to-petition-hints.scss';
import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon';

const RespondToPetitionHints = () => (
  <div>
    <div className={styles.hints}>
      <Paragraph size={'small'}>{settings.respondToPetitionPage.hints.title}</Paragraph>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.icon}>
            <Icon id='Advance' modifier='primary' size='small' />
          </span>
          {settings.respondToPetitionPage.hints.first}
        </li>
        <li className={styles.item}>
          <span className={styles.icon}>
            <Icon id='Advance' modifier='primary' size='small' />
          </span>
          {settings.respondToPetitionPage.hints.second}
        </li>
        <li className={styles.item}>
          <span className={styles.icon}>
            <Icon id='Advance' modifier='primary' size='small' />
          </span>
          {settings.respondToPetitionPage.hints.third}
        </li>
        <li className={styles.item}>
          <span className={styles.icon}>
            <Icon id='Advance' modifier='primary' size='small' />
          </span>
          {settings.respondToPetitionPage.hints.fourth}
        </li>
      </ul>
    </div>
  </div>
);

export default RespondToPetitionHints;
