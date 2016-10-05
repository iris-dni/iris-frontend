import React from 'react';
import styles from './petition.scss';
import LayoutWrap from 'components/LayoutWrap';
import LayoutContent from 'components/LayoutContent';
import LayoutSidebar from 'components/LayoutSidebar';
import Container from 'components/Container';
import Section from 'components/Section';

import PetitionHeader from 'containers/PetitionHeader';
import PetitionBody from 'containers/PetitionBody';
import PetitionResponse from 'containers/PetitionResponse';
import PetitionSidebar from 'containers/PetitionSidebar';
import ShowWhen from 'components/ShowWhen';
import SharePetition from 'containers/SharePetition';

const Petition = ({ preview }) => (
  <article>
    <Section theme={'grey'}>
      <Container>
        <PetitionHeader />
      </Container>
    </Section>
    <Container>
      <LayoutWrap>
        <LayoutContent>
          <PetitionBody />
          <ShowWhen when={'small'}>
            <div className={styles.share}>
              <SharePetition />
            </div>
          </ShowWhen>
          <PetitionResponse />
        </LayoutContent>
        <LayoutSidebar>
          <PetitionSidebar />
        </LayoutSidebar>
      </LayoutWrap>
    </Container>
  </article>
);

export default Petition;
