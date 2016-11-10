import React from 'react';
import settings from 'settings';
import ExternalTeaserBlock from 'components/ExternalTeaserBlock';

const PetitionFooter = ({ links, mentions }) => (
  <div>
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
  </div>
);

export default PetitionFooter;
