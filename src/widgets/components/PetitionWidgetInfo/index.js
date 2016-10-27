import React from 'react';
import styles from './petition-widget-info.scss';
import IconAndInfo from 'components/IconAndInfo';

const PetitionWidgetInfo = ({ owner, city }) => (
  <ul className={styles.root}>
    {owner &&
      <li className={styles.item}>
        <IconAndInfo
          icon='User'
          size={'small'}
          info={owner}
        />
      </li>
    }
    {city && city.label &&
      <li className={styles.item}>
        <IconAndInfo
          icon='Pin'
          size={'small'}
          info={city.label}
        />
      </li>
    }
  </ul>
);

export default PetitionWidgetInfo;
