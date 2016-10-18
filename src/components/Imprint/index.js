import React from 'react';
import settings from 'settings';
import Container from 'components/Container';
import BlockContainer from 'components/BlockContainer';
import CreateCTA from 'components/CreateCTA';
import Header from 'components/Header';
import PlatformSupporters from 'components/PlatformSupporters';

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
      <CreateCTA {...settings.createCTA} />
    </section>
    <section>
      <Container>
        <BlockContainer>
          Imprint
        </BlockContainer>
      </Container>
    </section>
  </article>
);

export default Imprint;
