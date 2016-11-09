import React from 'react';
import settings from 'settings';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import PageBuilder from 'components/PageBuilder';

const MODULES = [
  {
    component: 'Hero',
    props: {
      ...settings.aboutPage.hero
    }
  }
];

const AboutContainer = React.createClass({
  render () {
    return (
      <div>
        <Helmet title={settings.aboutPage.title} />
        <PageBuilder modules={MODULES} />
      </div>
    );
  }
});

export default connect(
  null,
  null
)(AboutContainer);
