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

export default ({ id, modifier, iconModifier, size }) => (
  <span className={getClassname(size, modifier)} aria-hidden role={'presentation'}>
    <span className={styles.icon}>
      <Icon
        id={id}
        modifier={iconModifier || 'invert'}
        size={size || 'small'}
      />
    </span>
  </span>
);
