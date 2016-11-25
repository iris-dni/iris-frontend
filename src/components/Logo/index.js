import React from 'react';
import styles from './logo.scss';

const Logo = ({ image, text }) => (
  image
    ? <img className={styles.image} src={image} alt={text} />
    : <span className={styles.text}>{text}</span>
);

export default Logo;
