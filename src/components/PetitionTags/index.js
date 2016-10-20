import React from 'react';
import settings from 'settings';
import styles from './petition-tags.scss';
import Icon from 'components/Icon';

const PetitionTags = ({ winner, response, isTeaser }) => {
  const hasResponse = !!(response && response.text);
  if (!winner && !hasResponse) {
    return null;
  }

  const itemStyle = isTeaser ? styles['item--small'] : styles.item;

  return (
    <ul className={styles.list}>
      {winner &&
        <li className={itemStyle}>
          <div className={styles.winner}>
            <span className={styles.icon}>
              <Icon id='Flag' size='tiny' modifier='invert' />
            </span>
            <span>{settings.petitionPage.tags.winner}</span>
          </div>
        </li>
      }
      {response.text &&
        <li className={itemStyle}>
          <div className={styles.response}>
            <span className={styles.icon}>
              <Icon id='Note' size='tiny' modifier='invert' />
            </span>
            <span>{settings.petitionPage.tags.response}</span>
          </div>
        </li>
      }
    </ul>
  );
};

export default PetitionTags;
