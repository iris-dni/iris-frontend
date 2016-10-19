import React from 'react';
import TeaserGrid from 'components/TeaserGrid';
import Container from 'components/Container';
import BlockContainer from 'components/BlockContainer';
import Section from 'components/Section';
import Heading2 from 'components/Heading2';
import styles from './homepage-petitions.scss';
import Link from 'components/Link';

const HomepagePetitions = ({ groupedPetitions, title, text, linkText }) => (
  <section>
    <Section>
      <Container>
        <BlockContainer>
          <div className={styles.head}>
            <div className={styles.left}>
              <Heading2 text={title} />
              <span className={styles.text}>{text}</span>
            </div>
            <Link href='/petitions'>{linkText}</Link>
          </div>
        </BlockContainer>
        <TeaserGrid
          petitions={groupedPetitions.latest.data}
          isLoading={groupedPetitions.latest.isLoading}
        />
      </Container>
    </Section>
  </section>
);

export default HomepagePetitions;
