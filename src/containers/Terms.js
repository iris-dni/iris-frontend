import React from 'react';
import settings from 'settings';
import Helmet from 'react-helmet';
import PageBuilder from 'components/PageBuilder';

const MODULES = [
  {
    component: 'PageHeader',
    props: {
      ...settings.termsPage.header
    }
  },
  {
    component: 'ContentBlock',
    props: {
      ...settings.termsPage.terms,
      markdown: true,
      size: 'small'
    }
  }
];

const TermsContainer = React.createClass({
  render () {
    return (
      <div>
        <Helmet title={settings.termsPage.title} />
        <PageBuilder modules={MODULES} />
      </div>
    );
  }
});

export default TermsContainer;
