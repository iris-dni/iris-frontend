import React from 'react';
import settings from 'settings';
import getPetitionOwner from 'selectors/petitionOwner';
import getPetitionCity from 'selectors/petitionCity';
import getPetitionPath from 'helpers/getPetitionPath';
import Paragraph from 'components/Paragraph';
import Link from 'components/Link';

const RespondToPetitionDetails = ({ petition }) => (
  <div>
    <Paragraph noMargin>
      {`${settings.respondToPetitionPage.details.for} `}
      <Link href={getPetitionPath(petition.id)}>{petition.title}</Link>
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
  </div>
);

export default RespondToPetitionDetails;
