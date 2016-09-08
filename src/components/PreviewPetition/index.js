import React from 'react';
import styles from './preview-petition.scss';
import PetitionActions from 'components/PetitionActions';
import Petition from 'components/Petition';

const PreviewPetition = ({ petition, fetchPetition, publishPetition }) => (
  <div>
    <Petition preview />
    {!petition.published &&
      <div className={styles.actions}>
        <PetitionActions
          petition={petition}
          actions={{fetchPetition, publishPetition}}
        />
      </div>
    }
  </div>
);

export default PreviewPetition;
