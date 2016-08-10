import React from 'react';
import Icon from 'components/icon';
// import styles from './icon-and-info.scss';

const IconAndInfo = ({ children, icon, info, size }) => (
  <span>
    <Icon id={icon} size={size} />
    {children || info}
  </span>
);

export default IconAndInfo;
