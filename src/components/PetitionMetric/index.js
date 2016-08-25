import React from 'react';
import styles from './petitionmetric.scss';
import CircleProgressBar from 'components/CircleProgressBar';
import Icon from 'components/Icon';

export default ({ icon, figure, caption, percentage, aria }) => {
  return (
    <div className={styles.root}>
      <div className={styles.progress}>
        <CircleProgressBar percentage={percentage} size='small' aria={aria}>
          <Icon id={icon} size='small' />
        </CircleProgressBar>
      </div>
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
};
