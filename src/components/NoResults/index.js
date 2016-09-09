import React from 'react';
import styles from './no-results.scss';
import Link from 'components/Link';

const NoResults = ({ modifier, children, text }) => (
  <div className={styles.root} role='alert'>
    <h2 className={styles.header}>
      No petitions found
    </h2>
    <p>Try a new search filter, <Link href={'/petitions'}>Browse all Petitions</Link> or why not <Link href={'/petitions/new'}>Create a Petition</Link> yourself!</p>
  </div>
);

export default NoResults;
