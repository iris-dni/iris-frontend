import React from 'react';
import { translation } from 'translations';
import ExternalTeaserBlock from 'components/ExternalTeaserBlock';
import styles from './petition-footer.scss';

const PetitionFooter = ({ links, mentions }) => (
  <section className={styles.root}>
    {!!links.length &&
      <ExternalTeaserBlock
        title={translation('petitionPage.attachedLinks')}
        links={links}
      />
    }
    {!!mentions.length &&
      <ExternalTeaserBlock
        title={translation('petitionPage.attachedMentions')}
        links={mentions}
      />
    }
  </section>
);

export default PetitionFooter;
