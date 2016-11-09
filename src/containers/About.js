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
  },
  {
    component: 'ThreeUp',
    props: {
      title: 'How it works',
      columns: [
        {
          title: 'Create your petition',
          text: 'Anyone can create petitions, you do not need to be part of an organisation. All you need to do is have a valid mobile number to verify your identity.',
          image: {
            src: 'http://placehold.it/300x100',
            alt: 'Create graphic'
          }
        },
        {
          title: 'Create your petition',
          text: 'Anyone can create petitions, you do not need to be part of an organisation. All you need to do is have a valid mobile number to verify your identity.',
          image: {
            src: 'http://placehold.it/300x100',
            alt: 'Create graphic'
          }
        },
        {
          title: 'Create your petition',
          text: 'Anyone can create petitions, you do not need to be part of an organisation. All you need to do is have a valid mobile number to verify your identity.',
          image: {
            src: 'http://placehold.it/300x100',
            alt: 'Create graphic'
          }
        }
      ]
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
