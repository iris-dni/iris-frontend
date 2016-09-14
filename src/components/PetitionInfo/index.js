import React from 'react';
import styles from './petition-info.scss';
import IconAndInfo from 'components/IconAndInfo';
import { Link } from 'react-router';
import { petitionsPath } from 'helpers/petitionUrls';

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
    {city && city.label &&
      <li className={styles.item}>
        <IconAndInfo icon='Pin'>
          <Link to={petitionsPath({ city })}>
            {city.label}
          </Link>
        </IconAndInfo>
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
