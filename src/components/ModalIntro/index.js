import React from 'react';
import styles from './modal-intro.scss';
import TextCenter from 'components/TextCenter';

const ModalIntro = ({ title, intro }) => (
  <TextCenter>
    {title && <h2 className={styles.title}>{title}</h2>}
    <p className={styles.intro}>
      {intro}
    </p>
  </TextCenter>
);

export default ModalIntro;
