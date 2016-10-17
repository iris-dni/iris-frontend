import React from 'react';
import Heading1 from 'components/Heading1';
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
          <Heading1 text={title} />
        </div>
      </Container>
    </div>
  </section>
);

export default Hero;
