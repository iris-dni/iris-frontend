import React from 'react';
import settings from 'settings';
import styles from 'components/RespondToPetitionHints/respond-to-petition-hints.scss';
import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon';

const RespondToPetitionHints = ({ petition }) => (
  <div>
    <div className={styles.hints}>
      <Paragraph>{settings.respondToPetitionPage.hints.title}</Paragraph>
      <Paragraph>
        <span className={styles.icon}>
          <Icon id='Advance' modifier='primary' size='small' />
        </span>
        {settings.respondToPetitionPage.hints.first}
      </Paragraph>
      <Paragraph>
        <span className={styles.icon}>
          <Icon id='Advance' modifier='primary' size='small' />
        </span>
        {settings.respondToPetitionPage.hints.second}
      </Paragraph>
      <Paragraph>
        <span className={styles.icon}>
          <Icon id='Advance' modifier='primary' size='small' />
        </span>
        {settings.respondToPetitionPage.hints.third}
      </Paragraph>
      <Paragraph>
        <span className={styles.icon}>
          <Icon id='Advance' modifier='primary' size='small' />
        </span>
        {settings.respondToPetitionPage.hints.fourth}
      </Paragraph>
    </div>
  </div>
);

export default RespondToPetitionHints;
