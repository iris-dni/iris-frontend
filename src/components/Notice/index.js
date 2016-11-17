import React from 'react';
import styles from './notice.scss';
import TextCenter from 'components/TextCenter';

const Notice = ({ children }) => (
  <div className={styles.root}>
    <TextCenter>
      {children}
    </TextCenter>
  </div>
);

export default Notice;
