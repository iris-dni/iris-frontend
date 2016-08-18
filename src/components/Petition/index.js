import React from 'react';
import LayoutWrap from 'components/LayoutWrap';
import LayoutContent from 'components/LayoutContent';
import LayoutSidebar from 'components/LayoutSidebar';
import Container from 'components/Container';
import PetitionHeader from 'components/PetitionHeader';
import PetitionBody from 'components/PetitionBody';
import PetitionSidebar from 'containers/PetitionSidebar';

const Petition = ({ header, body, sidebar }) => (
  <Container>
    <article>
      <PetitionHeader {...header} />
      <LayoutWrap>
        <LayoutContent>
          <PetitionBody {...body} />
        </LayoutContent>
        <LayoutSidebar>
          <PetitionSidebar />
        </LayoutSidebar>
      </LayoutWrap>
    </article>
  </Container>
);

export default Petition;
