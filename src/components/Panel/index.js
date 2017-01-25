import React from 'react';
import Container from 'components/Container';
import Heading2 from 'components/Heading2';
import TextCenter from 'components/TextCenter';
import Paragraph from 'components/Paragraph';

import styles from './panel.scss';

const Panel = ({ title, text }) => (
  <div className={styles.root}>
    <Container>
      <TextCenter>
        {title &&
          <Heading2 text={title} size='large' />
        }
        {text &&
          <Paragraph size='small'>{text}</Paragraph>
        }
      </TextCenter>
    </Container>
  </div>
);

export default Panel;
