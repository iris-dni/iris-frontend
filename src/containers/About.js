import React from 'react';
import settings from 'settings';
import Helmet from 'react-helmet';
import PageBuilder from 'components/PageBuilder';

const MODULES = [
  {
    component: 'Hero',
    props: {
      ...settings.aboutPage.hero
    }
  },
  {
    component: 'ContentGrid',
    props: {
      columnCount: 3,
      ...settings.aboutPage.stepsInfo
    }
  },
  {
    component: 'ContentGrid',
    props: {
      ...settings.aboutPage.supportInfo,
      columnCount: 2,
      theme: 'grey'
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

export default AboutContainer;
