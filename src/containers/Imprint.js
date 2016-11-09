import React from 'react';
import { connect } from 'react-redux';
import Imprint from 'components/Imprint';

const ImprintContainer = (props) => (
  <Imprint {...props} />
);

export default connect(
  null,
  null
)(ImprintContainer);
