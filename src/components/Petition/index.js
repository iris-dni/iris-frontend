import React from 'react';
import LayoutWrap from 'components/LayoutWrap';
import LayoutContent from 'components/LayoutContent';
import Container from 'components/Container';
import PetitionBody from 'components/PetitionBody';
import PetitionHeader from 'components/PetitionHeader';

const Petition = ({ header, body }) => (
  <Container>
    <article>
      <PetitionHeader {...header} />
      <LayoutWrap>
        <LayoutContent>
          <PetitionBody {...body} />
        </LayoutContent>
      </LayoutWrap>
    </article>
  </Container>
);

export default Petition;
