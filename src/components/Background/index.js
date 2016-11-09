import React from 'react';
import styles from './background.scss';

const Background = ({ image }) => (
  <div
    style={image ? { backgroundImage: `url(${image})` } : {}}
    className={styles[image ? 'background-image' : 'background-color']} />
);

export default Background;
