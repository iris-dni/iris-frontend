import React from 'react';
import settings from 'settings';
import TextCenter from 'components/TextCenter';
import Heading2 from 'components/Heading2';
import styles from './imprint-details.scss';

const ImprintDetails = () => (
  <div>
    <TextCenter>
      <Heading2 size='large'>
        {settings.imprintPage.detail.title}
      </Heading2>
    </TextCenter>
    <div className={styles.bottom}>
      <div className={styles.block}>
        <h3>{settings.imprintPage.detail.company.title}</h3>
        {Object.keys(settings.imprintPage.detail.company).slice(1).map(item =>
          <div key={item}>{settings.imprintPage.detail.company[item]}</div>
        )}
      </div>
      <div className={styles.block}>
        <h3>{settings.imprintPage.detail.contact.title}</h3>
        {Object.keys(settings.imprintPage.detail.contact).slice(1).map(item =>
          <div key={item}>{settings.imprintPage.detail.contact[item]}</div>
        )}
      </div>
    </div>
  </div>
);

export default ImprintDetails;
