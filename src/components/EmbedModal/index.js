import React from 'react';
import ModalIntro from 'components/ModalIntro';
import CopyTextarea from 'components/CopyTextarea';

const ShareModal = ({ title, intro, button }) => (
  <div>
    <ModalIntro
      title={title}
      intro={intro}
    />
    <CopyTextarea
      {...button}
      text={'<script></script>'}
    />
  </div>
);

export default ShareModal;
