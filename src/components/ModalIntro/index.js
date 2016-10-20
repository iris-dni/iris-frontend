import React from 'react';
import styles from './modal-intro.scss';
import TextCenter from 'components/TextCenter';

const ModalIntro = ({ title, intro }) => (
  <div className={styles.root}>
    <TextCenter>
      <h2 id={'dialog-title'} className={styles.title}>{title}</h2>
      <p className={styles.intro}>
        {intro}
      </p>
    </TextCenter>
  </div>
);

export default ModalIntro;
