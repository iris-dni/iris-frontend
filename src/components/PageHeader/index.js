import React from 'react';
import Section from 'components/Section';
import Container from 'components/Container';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';

const PageHeader = ({ title, intro }) => (
  <Section element={'div'}>
    <Container>
      <Header padding>
        <PageTitle
          title={title}
          intro={intro}
          centered
        />
      </Header>
    </Container>
  </Section>
);

export default PageHeader;
