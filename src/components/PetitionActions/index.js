import React from 'react';
import styles from './petition-actions.scss';
import settings from 'settings';
import Button from 'components/Button';
// import ButtonSet from 'components/ButtonSet';

// import ButtonLink from 'components/ButtonLink';
// import ModalTrigger from 'containers/ModalTrigger';

// const publishModal = {
//   ...settings.previewPetitionPage.publishButton.modal,
//   type: 'auth'
// };

const PetitionActions = ({ petition, actions }) => (
  <div className={styles.root}>
    <Button
      type={'button'}
      modifier={'accent'}
      onClick={actions.publishPetition && (() => actions.publishPetition({ petition }))}
      text={settings.previewPetitionPage.publishButton.text}
    />
  </div>
);

export default PetitionActions;
