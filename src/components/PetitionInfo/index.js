import React from 'react';
import styles from './petition-info.scss';
import IconAndInfo from 'components/IconAndInfo';
import Link from 'components/Link';
import { petitionsPath } from 'helpers/petitionUrls';

const PetitionInfo = ({ owner, city, ending }) => (
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
          <Link href={petitionsPath({ city })}>
            {city.label}
          </Link>
        </IconAndInfo>
      </li>
    }
    <li className={styles.item}>
      <IconAndInfo
        icon='Clock'
        info={ending}
      />
    </li>
  </ul>
);

export default PetitionInfo;
