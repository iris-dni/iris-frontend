import React from 'react';
import styles from './dial.scss';

const Dial = ({ icon, figure, caption, percentage }) => (
  <div className={styles.root}>
    {/* <div className={styles.counter}>
      {percentage}
    </div> */}
    <dl className={styles.text}>
      <dt className={styles.caption}>
        {caption}
      </dt>
      <dd className={styles.figure}>
        {figure}
      </dd>
    </dl>
  </div>
);

export default Dial;
