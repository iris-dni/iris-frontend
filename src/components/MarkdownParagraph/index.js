import React from 'react';
import Markdown from 'react-markdown';
import styles from 'components/Paragraph/paragraph.scss';

const MarkdownParagraph = ({ text, noMargin }) => (
  <Markdown
    className={styles[noMargin ? 'no-margin' : 'root']}
    disallowedTypes={['HtmlInline', 'HtmlBlock', 'Image']}
    source={text} />
);

export default MarkdownParagraph;
