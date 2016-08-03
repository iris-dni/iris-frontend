import React from 'react';
import styles from './petition-info.scss';
import IconAndInfo from 'components/IconAndInfo';

const PetitionInfo = ({ city, dateRange }) => (
  <ul className={styles.root}>
    <li className={styles.item}>
      <IconAndInfo
        icon='map'
        info={city || 'Aargau'}
      />
    </li>
    <li className={styles.item}>
      <IconAndInfo
        icon='time'
        info={dateRange}
      />
    </li>
  </ul>
);

export default PetitionInfo;
