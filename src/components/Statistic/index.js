import React from 'react';
import styles from './statistic.scss';

const Statistic = ({ figure, label }) => (
  <span className={styles.root}>
    <b className={styles.figure}>{figure}</b>
    <span className={styles.label}>{label}</span>
  </span>
);

export default Statistic;
