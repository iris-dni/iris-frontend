import React from 'react';
import styles from './petition-widget-info.scss';
import IconAndInfo from 'components/IconAndInfo';

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
          {city.label}
        </IconAndInfo>
      </li>
    }
  </ul>
);

export default PetitionWidgetInfo;
