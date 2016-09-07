import React from 'react';
import settings from 'settings';
import styles from './preview-petition.scss';
import Container from 'components/Container';
import ButtonSet from 'components/ButtonSet';
import ButtonLink from 'components/ButtonLink';
import ModalTrigger from 'containers/ModalTrigger';

import LayoutWrap from 'components/LayoutWrap';
import LayoutContent from 'components/LayoutContent';
import LayoutSidebar from 'components/LayoutSidebar';

import PetitionHeader from 'components/PetitionHeader';
import PetitionBody from 'components/PetitionBody';
import PetitionSidebar from 'components/PetitionSidebar';

const publishModal = {
  ...settings.previewPetitionPage.publishButton.modal,
  type: 'auth'
};

const PreviewPetition = ({ petition, fetchPetition, publishPetition }) => (
  <Container>
    <article>
      <PetitionHeader {...petition} />
      <LayoutWrap>
        <LayoutContent>
          <PetitionBody
            {...petition}
            suggestedSolution={petition.suggested_solution}
          />
        </LayoutContent>
        <LayoutSidebar>
          <PetitionSidebar {...petition}
            timeMetric={{}}
            supportable={false}
          />
        </LayoutSidebar>
      </LayoutWrap>
    </article>
    <div className={styles.preview}>
      {!petition.published &&
        <ButtonSet>
          <ButtonLink
            onClick={fetchPetition && (() => fetchPetition(petition.id))}
            href={`/petitions/${petition.id}/edit`}
            text={settings.previewPetitionPage.editButton.text}
          />
          <ModalTrigger
            authenticating
            modal={publishModal}
            onClick={() => publishPetition(petition)}
            href={`/petitions/${petition.id}/edit?intent=publish`}
            text={settings.previewPetitionPage.publishButton.text}
          />
        </ButtonSet>
      }
    </div>
  </Container>
);

export default PreviewPetition;
