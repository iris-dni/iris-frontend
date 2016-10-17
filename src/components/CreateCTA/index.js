import React from 'react';
import Heading2 from 'components/Heading2';
import TextCenter from 'components/TextCenter';
import Container from 'components/Container';
import Paragraph from 'components/Paragraph';
import BlockContainer from 'components/BlockContainer';
import ButtonLink from 'components/ButtonLink';

import styles from './create-cta.scss';

const CreateCTA = ({ title, text, buttonText, background }) => (
  <div className={styles.root} style={{ backgroundImage: `url(${background})` }}>
    <Container>
      <BlockContainer>
        <div className={styles.inner}>
          <TextCenter>
            <Heading2 text={title} size='large' />
            <Paragraph size='small'>{text}</Paragraph>
            <ButtonLink
              text={buttonText}
              modifier='light'
              href='/petitions/new'
            />
          </TextCenter>
        </div>
      </BlockContainer>
    </Container>
  </div>
);

export default CreateCTA;
