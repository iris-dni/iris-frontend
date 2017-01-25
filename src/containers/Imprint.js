import React from 'react';
import settings from 'settings';
import Helmet from 'react-helmet';
import PageBuilder from 'components/PageBuilder';

const MODULES = [
  {
    component: 'PageHeader',
    props: {
      ...settings.imprintPage.supportersHeader
    }
  },
  {
    component: 'LogosGrid',
    props: {
      items: settings.platformSupporters
    }
  },
  {
    component: 'PageHeader',
    props: {
      ...settings.imprintPage.contactHeader
    }
  },
  {
    component: 'ContentGrid',
    props: {
      ...settings.imprintPage.contactInfo,
      columnCount: 2
    }
  }
];

const ImprintContainer = React.createClass({
  render () {
    return (
      <div>
        <Helmet title={settings.imprintPage.title} />
        <PageBuilder modules={MODULES} />
      </div>
    );
  }
});

export default ImprintContainer;
