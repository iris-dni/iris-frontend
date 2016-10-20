import React from 'react';
import styles from './petition-actions.scss';
import settings from 'settings';
import Button from 'components/Button';
import ButtonLink from 'components/ButtonLink';
import ButtonSet from 'components/ButtonSet';

const PetitionActions = ({ petition, actions }) => (
  <div className={styles.root}>
    <ButtonSet>
      <ButtonLink
        href={`/petitions/${petition.id}/edit`}
        text={'Edit petition'}
      />
      <Button
        type={'button'}
        modifier={'accent'}
        onClick={actions.publishPetition && (() => actions.publishPetition({ petition }))}
        text={settings.previewPetitionPage.publishButton.text}
        disabled={petition.isLoading}
      />
    </ButtonSet>
  </div>
);

export default PetitionActions;
