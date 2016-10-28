import React from 'react';
import styles from './petition-widget-info.scss';
import IconAndInfo from 'components/IconAndInfo';

const PetitionWidgetInfo = ({ owner, city }) => (
  <ul className={styles.root}>
    {city && city.label &&
      <li className={styles.item}>
        <IconAndInfo
          icon='Pin'
          size={'small'}
          info={city.label}
        />
      </li>
    }
    {owner &&
      <li className={styles.item}>
        <IconAndInfo
          icon='User'
          size={'small'}
          info={owner}
        />
      </li>
    }
  </ul>
);

export default PetitionWidgetInfo;
