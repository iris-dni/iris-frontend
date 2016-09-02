import React from 'react';
import styles from './share-modal.scss';
import ModalIntro from 'components/ModalIntro';
import TextCenter from 'components/TextCenter';

const ShareModal = ({ title, intro, link }) => (
  <div>
    <ModalIntro
      title={title}
      intro={intro}
    />
    <TextCenter>
      <a href={link} className={styles.link}>{link}</a>
    </TextCenter>
  </div>
);

export default ShareModal;
