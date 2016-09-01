import React from 'react';
import styles from './petition-info.scss';
import IconAndInfo from 'components/IconAndInfo';

const PetitionInfo = ({ owner, city, dateRange }) => (
  <ul className={styles.root}>
    {owner &&
      <li className={styles.item}>
        <IconAndInfo
          icon='User'
          info={owner}
        />
      </li>
    }
    {city &&
      <li className={styles.item}>
        <IconAndInfo
          icon='Pin'
          info={city}
        />
      </li>
    }
    <li className={styles.item}>
      <IconAndInfo
        icon='Clock'
        info={dateRange}
      />
    </li>
  </ul>
);

export default PetitionInfo;
