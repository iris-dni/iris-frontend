import React from 'react';
import settings from 'settings';
import Heading2 from 'components/Heading2';
import TextCenter from 'components/TextCenter';
import LinkTeaserGrid from 'components/LinkTeaserGrid';
import styles from './petition-footer.scss';

const PetitionFooter = ({ links }) => (
  <div className={styles.root}>
    {links.length > 0 &&
      <div>
        <TextCenter>
          <Heading2
            text={settings.petitionPage.attachedLinks}
          />
        </TextCenter>
        <LinkTeaserGrid
          links={links}
        />
      </div>
    }
  </div>
);

export default PetitionFooter;
