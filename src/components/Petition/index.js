import React from 'react';
import styles from './petition.scss';
import LayoutWrap from 'components/LayoutWrap';
import LayoutContent from 'components/LayoutContent';
import LayoutSidebar from 'components/LayoutSidebar';
import Container from 'components/Container';
import Section from 'components/Section';
import PetitionHeader from 'containers/PetitionHeader';
import PetitionImage from 'containers/PetitionImage';
import PetitionBody from 'containers/PetitionBody';
import PetitionResponse from 'containers/PetitionResponse';
import PetitionSidebar from 'containers/PetitionSidebar';
import ShowWhen from 'components/ShowWhen';
import PetitionShareButtons from 'components/PetitionShareButtons';
import PetitionFooter from 'containers/PetitionFooter';

const Petition = ({ preview, city }) => (
  <article>
    <Section theme={'grey'}>
      <Container>
        <PetitionHeader />
      </Container>
    </Section>
    <Container>
      <LayoutWrap>
        <LayoutContent>
          <PetitionImage />
          <PetitionBody />
          <PetitionResponse />
          <ShowWhen when={'small'}>
            <div className={styles.share}>
              <PetitionShareButtons preview={preview} />
            </div>
          </ShowWhen>
        </LayoutContent>
        <LayoutSidebar>
          <PetitionSidebar preview={preview} />
        </LayoutSidebar>
      </LayoutWrap>
    </Container>
    <Section theme={'light'}>
      <Container>
        <PetitionFooter />
      </Container>
    </Section>
  </article>
);

export default Petition;
