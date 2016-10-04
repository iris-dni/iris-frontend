import React from 'react';
import styles from './petition-tags.scss';
import Icon from 'components/Icon';

const PetitionTags = ({ winner, response }) => {
  const hasResponse = !!(response && response.text);
  if (!winner && !hasResponse) {
    return null;
  }

  return (
    <div className={styles.root}>
      {winner &&
        <div className={styles.winner}>
          <span className={styles.icon}>
            <Icon id='Flag' size='tiny' modifier='invert' />
          </span>
          <span>Winner</span>
        </div>}

      {response.text &&
        <div className={styles.response}>
          <span className={styles.icon}>
            <Icon id='Note' size='tiny' modifier='invert' />
          </span>
          <span>Response</span>
        </div>}
    </div>
  );
};

export default PetitionTags;
