import React from 'react';
import styles from './trust-confirmation.scss';
import settings from 'settings';
import Container from 'components/Container';
import Link from 'components/Link';
import Section from 'components/Section';
import Paragraph from 'components/Paragraph';
import MarkdownParagraph from 'components/MarkdownParagraph';
import TextCenter from 'components/TextCenter';
import FormWrapper from 'components/FormWrapper';
import FormHeader from 'components/FormHeader';
import TrustSupportConfirmationForm from 'components/TrustSupportConfirmationForm';
import TrustPublishConfirmationForm from 'components/TrustPublishConfirmationForm';
import TrustFlow from 'components/TrustFlow';

const generateIntroText = (me) => {
  return settings.trustConfirmationPage.intro
    .replace('%u', me.firstname)
    .replace('%n', me.mobile);
};

const TrustConfirmation = ({
  petition,
  me,
  resendVerification,
  action,
  introText
}) => (
  <div>
    <Container>
      <TextCenter>
        <FormHeader title={settings.trustConfirmationPage.title} />
      </TextCenter>
    </Container>
    <div className={styles.form}>
      <Section theme={'light'} padding margin>
        <Container>
          <FormWrapper>
            <MarkdownParagraph
              text={generateIntroText(me)}
              margin='no-margin'
            />
            <Paragraph>
              <Link onClick={() => resendVerification(petition, me)}>{settings.trustConfirmationPage.resendLink}</Link>
            </Paragraph>
            <MarkdownParagraph
              text={settings.trustConfirmationPage.instructions}
            />
            {action === 'support' &&
              <TrustSupportConfirmationForm />
            }
            {action === 'publish' &&
              <TrustPublishConfirmationForm />
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

TrustConfirmation.propTypes = {
  action: React.PropTypes.oneOf([
    'support',
    'publish'
  ])
};

export default TrustConfirmation;
