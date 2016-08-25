import React from 'react';
import styles from './icon-bullet.scss';
import Icon from 'components/Icon';

export default ({ id, modifier }) => (
  <div className={styles[modifier || 'root']} aria-role={'presentation'}>
    <div className={styles.icon}>
      <Icon
        id={id}
        modifier={'invert'}
        size={'small'}
      />
    </div>
  </div>
);
