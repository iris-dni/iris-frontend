import React from 'react';
import { connect } from 'react-redux';
import About from 'components/Imprint';

const AboutContainer = (props) => (
  <About {...props} />
);

export default connect(
  null,
  null
)(AboutContainer);
