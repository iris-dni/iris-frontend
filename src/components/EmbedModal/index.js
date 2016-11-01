import React from 'react';
import ModalIntro from 'components/ModalIntro';
import CopyTextarea from 'components/CopyTextarea';

const EmbedModal = ({ title, intro, button, embedCode }) => (
  <div>
    <ModalIntro title={title} intro={intro} />
    <CopyTextarea {...button} text={embedCode} />
  </div>
);

export default EmbedModal;
