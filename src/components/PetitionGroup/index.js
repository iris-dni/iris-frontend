import React from 'react';
import styles from './petition-group.scss';
import TeaserGrid from 'components/TeaserGrid';
import Container from 'components/Container';
import BlockContainer from 'components/BlockContainer';
import Section from 'components/Section';
import Heading2 from 'components/Heading2';
import Link from 'components/Link';
import Loading from 'components/Loading';

const PetitionGroup = ({ petitions, isLoading, title, text, linkText, linkHref }) => (
  <Section margin>
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
      <Loading isLoading={isLoading}>
        <TeaserGrid petitions={petitions} />
      </Loading>
    </Container>
  </Section>
);

export default PetitionGroup;
