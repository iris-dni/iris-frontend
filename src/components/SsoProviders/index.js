import React from 'react';
import styles from './sso-providers.scss';
import TextCenter from 'components/TextCenter';
import SsoLink from 'components/SsoLink';

const SsoProviders = ({ providers }) => (
  <div>
    <TextCenter>
      <ul className={styles.list}>
        {(providers || []).map(provider => (
          <li className={styles.item} key={provider.text}>
            <SsoLink
              url={provider.url}
              text={provider.text}
            />
          </li>
        ))}
      </ul>
    </TextCenter>
  </div>
);

export default SsoProviders;
