import React from 'react';
import getClassNames from 'helpers/getClassNames';
import styles from './background.scss';

const Background = ({ image, color }) => (
  <div
    style={image ? { backgroundImage: `url(${image})` } : {}}
    className={getClassNames(styles, [(image ? 'background-image' : 'background-color'), (color || 'default')])} />
);

export default Background;
