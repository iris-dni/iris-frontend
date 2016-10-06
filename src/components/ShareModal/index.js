import React from 'react';
import styles from './share-modal.scss';
import ModalIntro from 'components/ModalIntro';
import Link from 'components/Link';
import TextCenter from 'components/TextCenter';

const ShareModal = ({ title, intro, link, href }) => (
  <div>
    <ModalIntro
      title={title}
      intro={intro}
    />
    <TextCenter>
      <span className={styles.link}>
        <Link href={href} text={link} />
      </span>
    </TextCenter>
  </div>
);

export default ShareModal;
