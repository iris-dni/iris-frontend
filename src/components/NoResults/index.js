import React from 'react';
import settings from 'settings';
import styles from './no-results.scss';
import MarkdownParagraph from 'components/MarkdownParagraph';

const NoResults = () => (
  <div className={styles.root} role='alert'>
    <h2 className={styles.header}>{settings.noResults.title}</h2>
    <MarkdownParagraph size={'small'} text={settings.noResults.text} />
  </div>
);

export default NoResults;
