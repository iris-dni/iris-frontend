import React from 'react';
import settings from 'settings';
import ModalIntro from 'components/ModalIntro';
import openShareWindow from 'helpers/sharing/openShareWindow';
import ShareModalButtons from 'components/ShareModalButtons';

const ShareModal = ({ title, intro, buttons }) => (
  <div>
    <ModalIntro
      title={title}
      intro={intro}
    />
    <ShareModalButtons
      openPopup={(url, event) => openShareWindow(url, event, settings.shareButtons.popupTitle)}
      buttons={buttons}
    />
  </div>
);

export default ShareModal;
