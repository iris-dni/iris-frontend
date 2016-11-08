import React from 'react';
import mergeObjects from 'helpers/mergeObjects';
import settings, { setting } from 'settings';
import { translation } from 'translations';
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
    <AdSlot context={'imprint'} type='wideboard' />
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
      <CreateCTA {...mergeObjects(
        setting('createCTA'),
        translation('createCTA')
      )} />
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
