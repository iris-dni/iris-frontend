import React from 'react';
import { translation } from 'translations';
import TextCenter from 'components/TextCenter';
import Heading2 from 'components/Heading2';
import styles from './imprint-details.scss';

const ImprintDetails = () => (
  <div>
    <TextCenter>
      <Heading2 size='large'>
        {translation('imprint.detail.title')}
      </Heading2>
    </TextCenter>
    <div className={styles.bottom}>
      <div className={styles.block}>
        <h3>{translation('imprint.detail.company.title')}</h3>
        {Object.keys(translation('imprint.detail.company', [])).slice(1).map(item =>
          <div key={item}>{translation(('imprint.detail.company.' + item))}</div>
        )}
      </div>
      <div className={styles.block}>
        <h3>{translation('imprint.detail.contact.title')}</h3>
        {Object.keys(translation('imprint.detail.contact', [])).slice(1).map(item =>
          <div key={item}>{translation(('imprint.detail.contact.' + item))}</div>
        )}
      </div>
    </div>
  </div>
);

export default ImprintDetails;
