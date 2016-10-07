import React from 'react';
import Heading1 from 'components/Heading1';

const Hero = ({ title, missionTitle, missionDescription, background }) => (
  <section>
    <Heading1 text={title} />
  </section>
);

export default Hero;
