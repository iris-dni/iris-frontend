import React from 'react';
import settings from 'settings';
import Container from 'components/Container';
import Section from 'components/Section';
import ExternalTeaserBlock from 'components/ExternalTeaserBlock';

const PetitionFooter = ({ links, mentions }) => (
  (!!links.length || !!mentions.length)
  ? (
    <Section theme={'light'} padding>
      <Container>
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
      </Container>
    </Section>
  ) : null
);

export default PetitionFooter;
