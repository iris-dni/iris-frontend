import React from 'react';
import settings from 'settings';
import getPetitionOwner from 'selectors/petitionOwner';
import getPetitionCity from 'selectors/petitionCity';
import getPetitionPath from 'helpers/getPetitionPath';
import Link from 'components/Link';
import styles from 'components/EditPetition/edit-petition.scss';
import Container from 'components/Container';
import FormWrapper from 'components/FormWrapper';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';
import RespondToPetitionForm from 'components/RespondToPetitionForm';
import RespondToPetitionHints from 'components/RespondToPetitionHints';
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
      <Paragraph noMargin>
        {`${settings.respondToPetitionPage.details.for} `}
        <Link to={getPetitionPath(petition)}>{petition.title}</Link>
      </Paragraph>
      <Paragraph noMargin>
        {`${settings.respondToPetitionPage.details.by} ${getPetitionOwner(petition)}`}
      </Paragraph>
      <Paragraph noMargin>
        {`${settings.respondToPetitionPage.details.in} ${getPetitionCity(petition).name}`}
      </Paragraph>
      <Paragraph>
        {`${settings.respondToPetitionPage.details.collected} ${petition.supporters.amount} ${settings.respondToPetitionPage.details.votes}`}
      </Paragraph>
      <RespondToPetitionHints petition={petition} />
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
