import React from 'react';
import styles from './preview-petition.scss';
import PetitionActions from 'components/PetitionActions';
import Petition from 'components/Petition';

const PreviewPetition = ({ petition, publishPetition }) => (
  <div className={styles.root}>
    <Petition petition={petition} preview />
    {!petition.published &&
      <div className={styles.actions}>
        <PetitionActions
          petition={petition}
          actions={{publishPetition}}
        />
      </div>
    }
  </div>
);

export default PreviewPetition;
