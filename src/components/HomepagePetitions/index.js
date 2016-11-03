import React from 'react';
import settings from 'settings';
import TeaserGrid from 'components/TeaserGrid';
import Container from 'components/Container';
import BlockContainer from 'components/BlockContainer';
import Section from 'components/Section';
import Heading2 from 'components/Heading2';
import styles from './homepage-petitions.scss';
import Link from 'components/Link';

const HomepagePetitions = ({ groups = [], petitionGroups = [] }) => (
  <section>
    {groups.map(group => (
      <Section key={group}>
        <Container>
          <BlockContainer>
            <header className={styles.head}>
              <div className={styles.left}>
                <Heading2 text={settings.homePage.petitionGroups[group].title} />
                <span className={styles.text}>{settings.homePage.petitionGroups[group].text}</span>
              </div>
              <Link href='/petitions'>{settings.homePage.petitionGroups[group].linkText}</Link>
            </header>
          </BlockContainer>
          <TeaserGrid
            petitions={petitionGroups[group].data}
            isLoading={petitionGroups[group].isLoading}
          />
        </Container>
      </Section>
    ))}
  </section>
);

export default HomepagePetitions;
