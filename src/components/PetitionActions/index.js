import React from 'react';
import styles from './petition-actions.scss';
import { translation } from 'translations';
import Button from 'components/Button';
import ButtonLink from 'components/ButtonLink';
import ButtonSet from 'components/ButtonSet';

const PetitionActions = ({ petition, actions }) => (
  <div className={styles.root}>
    <ButtonSet>
      <ButtonLink
        href={`/petitions/${petition.id}/edit`}
        text={translation('previewPetitionPage.editButton')}
      />
      <Button
        type={'button'}
        modifier={'accent'}
        onClick={actions.publishPetition && (() => actions.publishPetition({ petition }))}
        text={translation('previewPetitionPage.publishButton')}
        disabled={petition.isLoading}
      />
    </ButtonSet>
  </div>
);

export default PetitionActions;
