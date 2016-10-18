import React from 'react';
import Container from 'components/Container';
import BlockContainer from 'components/BlockContainer';
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
      <BlockContainer>
        Create
      </BlockContainer>
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
