import React from 'react';
import settings from 'settings';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import Imprint from 'components/Imprint';

const ImprintContainer = React.createClass({
  render () {
    return (
      <div>
        <Helmet title={settings.imprintPage.title} />
        <Imprint {...this.props} />
      </div>
    );
  }
});

export default connect(
  null,
  null
)(ImprintContainer);
