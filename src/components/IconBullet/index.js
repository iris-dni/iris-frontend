import React from 'react';
import styles from './icon-bullet.scss';
import Icon from 'components/Icon';

const getClassname = (size, modifier, inline) => {
  return [
    styles[size || 'small'],
    styles[modifier || 'default'],
    styles[inline ? 'inline' : 'inline-block']
  ].join(' ');
};

export default ({ id, modifier, size }) => (
  <div className={getClassname(size, modifier)} aria-role={'presentation'}>
    <div className={styles.icon}>
      <Icon
        id={id}
        modifier={'invert'}
        size={size || 'small'}
      />
    </div>
  </div>
);
