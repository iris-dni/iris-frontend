import React from 'react';
import styles from './share-buttons.scss';
import ButtonLink from 'components/ButtonLink';
import ButtonIcon from 'components/ButtonIcon';

const ShareButtons = () => (
  <div className={styles.root}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <ButtonLink block external
          href={'#'}
          size={'compact'}
          brand={'facebook'}>
          <ButtonIcon id={'Facebook'} fill={'Dark'}>
            {'Share on Facebook'}
          </ButtonIcon>
        </ButtonLink>
      </li>
      <li className={styles.item}>
        <ButtonLink block external
          href={'#'}
          size={'compact'}
          brand={'twitter'}>
          <ButtonIcon id={'Twitter'} fill={'Dark'}>
            {'Share on Twitter'}
          </ButtonIcon>
        </ButtonLink>
      </li>
      <li className={styles.item}>
        <ButtonLink block external
          href={'#'}
          size={'compact'}
          brand={'whatsapp'}>
          <ButtonIcon id={'Whatsapp'} fill={'Dark'}>
            {'Send via Whatsapp'}
          </ButtonIcon>
        </ButtonLink>
      </li>
      <li className={styles.item}>
        <ButtonLink block external
          href={'#'}
          size={'compact'}
          brand={'email'}>
          <ButtonIcon id={'Email'} fill={'Dark'}>
            {'Send via Email'}
          </ButtonIcon>
        </ButtonLink>
      </li>
    </ul>
  </div>
);

export default ShareButtons;
