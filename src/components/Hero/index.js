import React from 'react';
import styles from './hero.scss';
import Container from 'components/Container';
import Panel from 'components/Panel';
import Background from 'components/Background';

const Hero = ({ title, background, missionTitle, missionDescription }) => (
  <section className={styles.root}>
    <div className={styles.top}>
      <Container>
        <div className={styles.inner}>
          <Background image={background} />
          <h1 className={styles.headline}>{title}</h1>
        </div>
      </Container>
    </div>
    {(missionTitle || missionDescription) &&
      <div className={styles.mission}>
        <Panel title={missionTitle} text={missionDescription} />
      </div>
    }
  </section>
);

export default Hero;
