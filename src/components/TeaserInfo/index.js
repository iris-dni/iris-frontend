import React from 'react';
import styles from './teaser-info.scss';
import IconAndInfo from 'components/IconAndInfo';

const TeaserInfo = ({ owner, city }) => (
  <ul className={styles.root}>
    <li className={styles.item}>
      <IconAndInfo
        icon='User'
        size='small'
        info={owner}
      />
    </li>
    {city && city.name &&
      <li className={styles.item}>
        <IconAndInfo
          icon='Pin'
          size='small'
          info={city.name}
        />
      </li>
    }
  </ul>
);

export default TeaserInfo;
