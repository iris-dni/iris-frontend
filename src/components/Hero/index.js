import React from 'react';
import Container from 'components/Container';
import Panel from 'components/Panel';

import styles from './hero.scss';

const Hero = ({ title, background, missionTitle, missionDescription }) => (
  <section>
    <div className={styles.top}>
      <Container>
        <div className={styles.inner}>
          <div
            style={background ? { backgroundImage: `url(${background})` } : {}}
            className={styles[background ? 'background-image' : 'background-color']} />
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
