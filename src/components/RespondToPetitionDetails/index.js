import React from 'react';
import { translation } from 'translations';
import getPetitionOwner from 'selectors/petitionOwner';
import getPetitionCity from 'selectors/petitionCity';
import getPetitionPath from 'helpers/getPetitionPath';
import Paragraph from 'components/Paragraph';
import Link from 'components/Link';

const RespondToPetitionDetails = ({ petition }) => (
  <div>
    <Paragraph margin='no-margin'>
      <strong>{`${translation('respondToPetitionPage.details.for')} `}</strong>
      <Link href={getPetitionPath(petition.id)}>{petition.title}</Link>
    </Paragraph>
    <Paragraph margin='no-margin'>
      <strong>{`${translation('respondToPetitionPage.details.by')}`}</strong> {`${getPetitionOwner(petition)}`}
    </Paragraph>
    <Paragraph margin='no-margin'>
      <strong>{`${translation('respondToPetitionPage.details.in')}`}</strong> {`${getPetitionCity(petition).name}`}
    </Paragraph>
    <Paragraph>
      <strong>{`${translation('respondToPetitionPage.details.collected')}`}</strong> {`${petition.supporters.amount} ${translation('respondToPetitionPage.details.supporters')}`}
    </Paragraph>
  </div>
);

export default RespondToPetitionDetails;
