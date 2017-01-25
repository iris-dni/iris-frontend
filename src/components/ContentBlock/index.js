import React from 'react';
import styles from './content-block.scss';
import Section from 'components/Section';
import Container from 'components/Container';
import Paragraph from 'components/Paragraph';
import MarkdownParagraph from 'components/MarkdownParagraph';

const ContentBlock = ({ markdown, content, size }) => (
  <Section margin>
    <Container>
      <div className={styles.content}>
        {markdown &&
          <MarkdownParagraph text={content} size={size || 'default'} />
        }
        {!markdown &&
          <Paragraph text={content} size={size || 'default'} />
        }
      </div>
    </Container>
  </Section>
);

export default ContentBlock;
