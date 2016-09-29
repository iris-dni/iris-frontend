import React from 'react';
import styles from './petition-response-status.scss';
import getPetitionResponseStatusTitle from 'helpers/getPetitionResponseStatusTitle';
import getPetitionResponseStatusText from 'helpers/getPetitionResponseStatusText';

const PetitionResponseStatus = (props) => (
  <div className={styles.root} >
    <h2>{getPetitionResponseStatusTitle(props)}</h2>
    <p>{getPetitionResponseStatusText(props)}</p>
  </div>
);

export default PetitionResponseStatus;
