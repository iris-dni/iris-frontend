import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { ssoProviders, authSettings } from 'settings';
import Container from 'components/Container';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import TextCenter from 'components/TextCenter';
import SsoLink from 'components/SsoLink';

const Login = withRouter(React.createClass({
  componentWillUpdate (nextProps) {
    const redirectAfterLogin = this.props.location.query.next || authSettings.afterLoginPath;

    if (nextProps.me) {
      this.props.router.replace(redirectAfterLogin);
    }
  },

  render () {
    return (
      <Container>
        <Header>
          <PageTitle
            title={'Nearly there!'}
            intro={'To begin creating your Petition please sign in using one of the services below. Afterwards, you won\'t be required to enter any contact information.'}
            centered
          />
        </Header>
        <TextCenter>
          {ssoProviders.map(provider => (
            <div key={provider.loginUrl}>
              <SsoLink {...this.props} provider={provider} />
            </div>
          ))}
        </TextCenter>
      </Container>
    );
  }
}));

export const mapStateToProps = ({ me, routing }) => ({ me, routing });

export default connect(
  mapStateToProps
)(Login);
