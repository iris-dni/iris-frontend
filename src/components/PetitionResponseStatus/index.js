import React from 'react';
import Markdown from 'react-markdown';
import styles from './petition-response-status.scss';
import getPetitionResponseStatusTitle from 'helpers/getPetitionResponseStatusTitle';
import getPetitionResponseStatusText from 'helpers/getPetitionResponseStatusText';
import Icon from 'components/Icon';

const PetitionResponseStatus = (props) => (
  <div className={styles.root} >
    <div className={styles.top}>
      <span className={styles.icon}>
        <Icon id='Flag' size='small' modifier='highlight' />
      </span>
      <h2>
        {getPetitionResponseStatusTitle(props)}
      </h2>
    </div>
    <Markdown source={getPetitionResponseStatusText(props)} />
  </div>
);

export default PetitionResponseStatus;
