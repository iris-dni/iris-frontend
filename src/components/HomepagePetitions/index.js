import React from 'react';
import TeaserGrid from 'components/TeaserGrid';
import Container from 'components/Container';
import BlockContainer from 'components/BlockContainer';
import Section from 'components/Section';
import Heading2 from 'components/Heading2';
import styles from './homepage-petitions.scss';
import Link from 'components/Link';

const HomepagePetitions = ({ petitions, title, text, linkText }) => (
  <section>
    <Section>
      <Container>
        <BlockContainer>
          <div className={styles.head}>
            <Heading2 text={title} />
            <Link href='/petitions'>{linkText}</Link>
          </div>
        </BlockContainer>
        <TeaserGrid petitions={petitions.latest} />
      </Container>
    </Section>
  </section>
);

export default HomepagePetitions;
