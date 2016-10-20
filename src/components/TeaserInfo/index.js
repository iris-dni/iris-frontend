import React from 'react';
import styles from './teaser-info.scss';
import IconAndInfo from 'components/IconAndInfo';

const TeaserInfo = ({ owner, city }) => (
  <ul className={styles.root}>
    {owner &&
      <li className={styles.item}>
        <IconAndInfo
          icon='User'
          size='small'
          info={owner}
        />
      </li>
    }
    {city &&
      <li className={styles.item}>
        <IconAndInfo
          icon='Pin'
          size='small'
          info={city.label}
        />
      </li>
    }
  </ul>
);

export default TeaserInfo;
