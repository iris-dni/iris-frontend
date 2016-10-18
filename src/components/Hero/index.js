import React from 'react';
import Container from 'components/Container';

import styles from './hero.scss';

const Hero = ({ title, missionTitle, missionDescription, background }) => (
  <section>
    <div className={styles.top}>
      <Container>
        <div className={styles.inner}>
          <div
            style={{ backgroundImage: `url(${background})` }}
            className={styles.background} />
          <h1>{title}</h1>
        </div>
      </Container>
    </div>
  </section>
);

export default Hero;
