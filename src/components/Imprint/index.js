import React from 'react';
// import settings from 'settings';
import Container from 'components/Container';
import BlockContainer from 'components/BlockContainer';
import ImprintDetails from 'components/ImprintDetails';
import Header from 'components/Header';
import PlatformSupporters from 'components/PlatformSupporters';
// import hasPlatformSupporters from 'helpers/hasPlatformSupporters';

const Imprint = () => (
  <article>
    <section>
      <Container>
        <Header padding>
          <PlatformSupporters />
        </Header>
      </Container>
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
