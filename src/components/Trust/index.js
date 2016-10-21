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

const getPageIntro = (loggedIn, action) => ({
  title: settings.trustPage[action].title,
  intro: settings.trustPage[action][loggedIn ? 'trustedIntro' : 'intro']
});

const Trust = ({
  isLoggedIn,
  petition,
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
    <Section theme={'grey'}>
      <Container>
        <div className={styles.form}>
          <FormWrapper>
            {!isLoggedIn &&
              <div className={styles['form-title']}>
                <Heading2 text={settings.trustPage[action].formTitle} />
              </div>
            }
            {action === 'support' &&
              <div>
                {/* <p>You are supporting {petition.title}</p> */}
                <TrustSupportForm />
              </div>
            }
            {action === 'publish' &&
              <div>
                {/* <p>Creating: {petition.title}</p> */}
                <TrustPublishForm />
              </div>
            }
          </FormWrapper>
        </div>
      </Container>
    </Section>
  </div>
);

Trust.propTypes = {
  action: React.PropTypes.oneOf([
    'support',
    'publish'
  ])
};

export default Trust;
