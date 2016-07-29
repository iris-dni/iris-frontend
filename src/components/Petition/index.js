import React from 'react';
import LayoutWrap from 'components/LayoutWrap';
import LayoutContent from 'components/LayoutContent';
import Container from 'components/Container';
import Heading2 from 'components/Heading2';
import Paragraph from 'components/Paragraph';
import PetitionHeader from 'components/PetitionHeader';

const Petition = ({ title, description, suggestedSolution }) => (
  <Container>
    <article>
      <PetitionHeader title={title} />
      <LayoutWrap>
        <LayoutContent>
          <Heading2
            text={'Begründung'}
          />
          <Paragraph
            text={description}
          />
          <Heading2
            text={'Lösung'}
          />
          <Paragraph
            text={suggestedSolution}
          />
        </LayoutContent>
      </LayoutWrap>
    </article>
  </Container>
);

export default Petition;
