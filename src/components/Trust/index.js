import React from 'react';
import settings from 'settings';
import styles from './trust.scss';

import Heading2 from 'components/Heading2';
import Container from 'components/Container';
import Section from 'components/Section';
import TextCenter from 'components/TextCenter';
import FormWrapper from 'components/FormWrapper';
import FormHeader from 'components/FormHeader';
import TrustSupportForm from 'components/TrustSupportForm';
import TrustPublishForm from 'components/TrustPublishForm';
import SsoProviders from 'components/SsoProviders';
import generateSsoProviders from 'helpers/generateSsoProviders';
import getReturnUrlFromLocation from 'helpers/getReturnUrlFromLocation';
import TrustFlow from 'components/TrustFlow';

const getPageIntro = (loggedIn, action) => ({
  title: settings.trustPage[action][loggedIn ? 'trustedTitle' : 'title'],
  intro: settings.trustPage[action][loggedIn ? 'trustedIntro' : 'intro']
});

const Trust = ({
  isLoggedIn,
  location,
  action
}) => (
  <div>
    <Container>
      <TextCenter>
        <FormHeader {...getPageIntro(isLoggedIn, action)}>
          <div className={styles.sso}>
            {!isLoggedIn &&
              <SsoProviders providers={generateSsoProviders(
                settings.ssoProviders,
                getReturnUrlFromLocation(location)
              )} />
            }
          </div>
        </FormHeader>
      </TextCenter>
    </Container>
    <div className={styles.form}>
      <Section theme={'light'} padding margin>
        <Container>
          <FormWrapper>
            {!isLoggedIn &&
              <div className={styles['form-title']}>
                <Heading2 text={settings.trustPage[action].formTitle} />
              </div>
            }
            {action === 'support' &&
              <TrustSupportForm />
            }
            {action === 'publish' &&
              <TrustPublishForm />
            }
          </FormWrapper>
        </Container>
      </Section>
    </div>
    <Container>
      <FormWrapper>
        <TrustFlow action={action} />
      </FormWrapper>
    </Container>
  </div>
);

Trust.propTypes = {
  location: React.PropTypes.object.isRequired,
  action: React.PropTypes.oneOf([
    'support',
    'publish'
  ])
};

export default Trust;
