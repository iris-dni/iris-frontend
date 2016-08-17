import React from 'react';
import styles from './petition-info.scss';
import IconAndInfo from 'components/IconAndInfo';

const PetitionInfo = ({ city, dateRange }) => (
  <ul className={styles.root}>
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
