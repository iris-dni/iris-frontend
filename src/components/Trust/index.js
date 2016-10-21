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

const getPageIntro = (loggedIn) => ({
  title: settings.trustPage[loggedIn ? 'trustedTitle' : 'supportTitle'],
  intro: settings.trustPage[loggedIn ? 'trustedIntro' : 'supportIntro']
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
        <FormHeader {...getPageIntro(isLoggedIn)}>
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
            {action === 'support' &&
              <div>
                {!isLoggedIn &&
                  <div className={styles['form-title']}>
                    <Heading2 text={settings.trustPage.supportFormTitle} />
                  </div>
                }
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
