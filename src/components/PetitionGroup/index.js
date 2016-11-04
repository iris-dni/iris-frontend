import React from 'react';
import TeaserGrid from 'components/TeaserGrid';
import Container from 'components/Container';
import BlockContainer from 'components/BlockContainer';
import Section from 'components/Section';
import Heading2 from 'components/Heading2';
import styles from './petition-group.scss';
import Link from 'components/Link';

const PetitionGroup = ({ petitions, isLoading, title, text, linkText, linkHref }) => (
  <Section>
    <Container>
      <BlockContainer>
        <header className={styles.head}>
          <div className={styles.left}>
            <Heading2 text={title} />
            <span className={styles.text}>{text}</span>
          </div>
          <Link href={linkHref}>{linkText}</Link>
        </header>
      </BlockContainer>
      <TeaserGrid
        petitions={petitions}
        isLoading={isLoading}
      />
    </Container>
  </Section>
);

export default PetitionGroup;
