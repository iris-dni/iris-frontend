import React from 'react';
import settings from 'settings';
import Container from 'components/Container';
import BlockContainer from 'components/BlockContainer';
import CreateCTA from 'components/CreateCTA';
import Header from 'components/Header';
import ImprintDetails from 'components/ImprintDetails';
import PlatformSupporters from 'components/PlatformSupporters';
import AdSlot from 'containers/AdSlot';

import hasPlatformSupporters from 'helpers/hasPlatformSupporters';

const Imprint = () => (
  <article>
    <AdSlot type='wideboard' />
    {hasPlatformSupporters(settings) &&
      <section>
        <Container>
          <Header padding>
            <PlatformSupporters />
          </Header>
        </Container>
      </section>
    }
    <section>
      <CreateCTA {...settings.createCTA} />
    </section>
    <section>
      <Container>
        <BlockContainer>
          <ImprintDetails />
        </BlockContainer>
      </Container>
    </section>
  </article>
);

export default Imprint;
