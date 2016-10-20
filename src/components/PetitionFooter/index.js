import React from 'react';
import settings from 'settings';
import ExternalTeaserBlock from 'components/ExternalTeaserBlock';
import styles from './petition-footer.scss';

const PetitionFooter = ({ links, mentions }) => (
  <section className={styles.root}>
    {!!links.length &&
      <ExternalTeaserBlock
        title={settings.petitionPage.attachedLinks}
        links={links}
      />
    }
    {!!mentions.length &&
      <ExternalTeaserBlock
        title={settings.petitionPage.attachedMentions}
        links={mentions}
      />
    }
  </section>
);

export default PetitionFooter;
