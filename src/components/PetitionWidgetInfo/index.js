import React from 'react';
import styles from './petition-widget-info.scss';
import IconAndInfo from 'components/IconAndInfo';
import Link from 'components/Link';
import { petitionsPath } from 'helpers/petitionUrls';

const PetitionWidgetInfo = ({ owner, city }) => (
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
  </ul>
);

export default PetitionWidgetInfo;
