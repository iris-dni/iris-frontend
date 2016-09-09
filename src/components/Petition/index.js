import React from 'react';
import LayoutWrap from 'components/LayoutWrap';
import LayoutContent from 'components/LayoutContent';
import LayoutSidebar from 'components/LayoutSidebar';
import Container from 'components/Container';

import PetitionHeader from 'containers/PetitionHeader';
import PetitionBody from 'containers/PetitionBody';
import PetitionSidebar from 'containers/PetitionSidebar';

const Petition = ({ preview }) => (
  <Container>
    <article>
      <PetitionHeader />
      <LayoutWrap>
        <LayoutContent>
          <PetitionBody />
        </LayoutContent>
        <LayoutSidebar>
          <PetitionSidebar />
        </LayoutSidebar>
      </LayoutWrap>
    </article>
  </Container>
);

export default Petition;
