import React from 'react';
import styles from './social-link.scss';
import Icon from 'components/Icon';

const SocialLink = ({ href, modifier, icon, label }) => (
  <a href={href} title={label} className={styles[modifier]}>
    <span className={styles.icon} aria-hidden aria-role={'presentation'}>
      <Icon id={icon} />
    </span>
    <span className={styles.label}>{label}</span>
  </a>
);

export default SocialLink;
