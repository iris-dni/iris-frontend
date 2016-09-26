import React from 'react';
import settings from 'settings';
import getPetitionOwner from 'selectors/petitionOwner';
import getPetitionCity from 'selectors/petitionCity';
import getPetitionURL from 'helpers/getPetitionURL';
import styles from 'components/EditPetition/edit-petition.scss';
import Container from 'components/Container';
import FormWrapper from 'components/FormWrapper';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import RespondToPetitionForm from 'components/RespondToPetitionForm';
import RespondToPetitionHints from 'components/RespondToPetitionHints';
import Heading2 from 'components/Heading2';
import Paragraph from 'components/Paragraph';

const RespondToPetition = ({ petition, router }) => (
  <Container>
    <FormWrapper>
      <Header>
        <PageTitle
          title={settings.respondToPetitionPage.title}
          intro={settings.respondToPetitionPage.intro}
        />
      </Header>
      <RespondToPetitionHints petition={petition} />
      <Header>
        <Heading2
          text={settings.respondToPetitionPage.details.title}
        />
      </Header>
      <Paragraph noMargin>
        {`${settings.respondToPetitionPage.details.article} ${petition.title}`}
      </Paragraph>
      <Paragraph noMargin>
        {`${settings.respondToPetitionPage.details.from} ${getPetitionOwner(petition)}`}
      </Paragraph>
      <Paragraph noMargin>
        {`${settings.respondToPetitionPage.details.in} ${getPetitionCity(petition).name}`}
      </Paragraph>
      <Paragraph noMargin>
        {`${settings.respondToPetitionPage.details.collected} ${petition.supporters.amount} ${settings.respondToPetitionPage.details.votes}`}
      </Paragraph>
      <Paragraph noMargin>
        {`${settings.respondToPetitionPage.details.url} ${getPetitionURL(petition.id)}`}
      </Paragraph>

      <div className={styles.form}>
        <RespondToPetitionForm
          initialValues={petition}
          petition={petition}
        />
      </div>
    </FormWrapper>
  </Container>
);

export default RespondToPetition;
