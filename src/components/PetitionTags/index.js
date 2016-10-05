import React from 'react';
import settings from 'settings';
import styles from './petition-tags.scss';
import Icon from 'components/Icon';

const PetitionTags = ({ winner, response }) => {
  const hasResponse = !!(response && response.text);
  if (!winner && !hasResponse) {
    return null;
  }

  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {winner &&
          <li className={styles.item}>
            <div className={styles.winner}>
              <span className={styles.icon}>
                <Icon id='Flag' size='tiny' modifier='invert' />
              </span>
              <span>{settings.petitionPage.tags.winner}</span>
            </div>
          </li>
        }
        {response.text &&
          <li className={styles.item}>
            <div className={styles.response}>
              <span className={styles.icon}>
                <Icon id='Note' size='tiny' modifier='invert' />
              </span>
              <span>{settings.petitionPage.tags.response}</span>
            </div>
          </li>
        }
      </ul>
    </div>
  );
};

export default PetitionTags;
