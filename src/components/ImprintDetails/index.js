import React from 'react';
import settings from 'settings';
import TextCenter from 'components/TextCenter';
import Heading2 from 'components/Heading2';
import styles from './imprint-details.scss';

const ImprintDetails = () => (
  <div>
    <TextCenter>
      <Heading2 size='large'>
        {settings.imprint.detail.title}
      </Heading2>
    </TextCenter>
    <div className={styles.bottom}>
      <div className={styles.block}>
        <h3>{settings.imprint.detail.company.title}</h3>
        {Object.keys(settings.imprint.detail.company).slice(1).map(item =>
          <div>{settings.imprint.detail.company[item]}</div>
        )}
      </div>
      <div className={styles.block}>
        <h3>{settings.imprint.detail.contact.title}</h3>
        {Object.keys(settings.imprint.detail.contact).slice(1).map(item =>
          <div>{settings.imprint.detail.contact[item]}</div>
        )}
      </div>
    </div>
  </div>
);

export default ImprintDetails;
