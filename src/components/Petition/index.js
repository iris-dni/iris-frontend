import React from 'react';
import LayoutWrap from 'components/LayoutWrap';
import LayoutContent from 'components/LayoutContent';
import LayoutSidebar from 'components/LayoutSidebar';
import Container from 'components/Container';
import Section from 'components/Section';

import PetitionHeader from 'containers/PetitionHeader';
import PetitionBody from 'containers/PetitionBody';
import PetitionResponse from 'containers/PetitionResponse';
import PetitionSidebar from 'containers/PetitionSidebar';

const Petition = ({ preview }) => (
  <article>
    <Section theme={'grey'}>
      <Container>
        <PetitionHeader />
      </Container>
    </Section>
    <Container>
      <LayoutWrap>
        <LayoutContent>
          <PetitionBody />
          <PetitionResponse />
        </LayoutContent>
        <LayoutSidebar>
          <PetitionSidebar />
        </LayoutSidebar>
      </LayoutWrap>
    </Container>
  </article>
);

export default Petition;
