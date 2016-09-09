import React from 'react';
import styles from './no-results.scss';
import Link from 'components/Link';

const NoResults = ({ modifier, children, text }) => (
  <div className={styles.root} role='alert'>
    <h2 className={styles.header}>
      No petitions found
    </h2>
    <p>Please try another filter or go back to the <Link href={'/petitions'}>Browse Petitions</Link> page</p>
  </div>
);

export default NoResults;
