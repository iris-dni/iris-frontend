import React from 'react';
import settings from 'settings';

import Container from 'components/Container';
import FormWrapper from 'components/FormWrapper';
import FormHeader from 'components/FormHeader';
import TrustSupportForm from 'components/TrustSupportForm';
import TrustPublishForm from 'components/TrustPublishForm';
import SsoProviders from 'components/SsoProviders';
import generateSsoProviders from 'helpers/generateSsoProviders';
import getReturnUrlFromLocation from 'helpers/getReturnUrlFromLocation';

const Trust = ({
  isLoggedIn,
  petition,
  location,
  action
}) => (
  <Container>
    <FormHeader
      title={settings.trustPage.title}
      intro={settings.trustPage.intro}
    />
    <FormWrapper>
      {!isLoggedIn &&
        <SsoProviders providers={generateSsoProviders(
          settings.ssoProviders,
          getReturnUrlFromLocation(location)
        )} />
      }
      {action === 'support' &&
        <div>
          <p>You are supporting {petition.title}</p>
          <TrustSupportForm />
        </div>
      }
      {action === 'publish' &&
        <div>
          <p>Creating: {petition.title}</p>
          <TrustPublishForm />
        </div>
      }
    </FormWrapper>
  </Container>
);

Trust.propTypes = {
  action: React.PropTypes.oneOf([
    'support',
    'publish'
  ])
};

export default Trust;
