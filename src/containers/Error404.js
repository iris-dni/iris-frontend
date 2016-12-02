import React from 'react';
import settings from 'settings';
import Helmet from 'react-helmet';
import ButtonLink from 'components/ButtonLink';
import Container from 'components/Container';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import Notice from 'components/Notice';
import Paragraph from 'components/Paragraph';

const Error404Container = React.createClass({
  render () {
    return (
      <div>
        <Helmet title={settings.error404page.title} />
        <Container>
          <Header padding>
            <PageTitle
              title={settings.error404page.title}
              centered
            />
          </Header>
          <Notice>
            <img src={'/dist/assets/images/error-graphic.svg'} alt={''} />
            <Paragraph>{settings.error404page.text}</Paragraph>
            <ButtonLink
              href={'/petitions'}
              text={settings.error404page.link}
            />
          </Notice>
        </Container>
      </div>
    );
  }
});

export default Error404Container;
