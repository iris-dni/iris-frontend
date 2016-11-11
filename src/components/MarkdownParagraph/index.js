import React from 'react';
import Markdown from 'react-markdown';
import styles from 'components/Paragraph/paragraph.scss';
import getClassNames from 'helpers/getClassNames';

const MarkdownParagraph = ({ text, margin, size }) => (
  text
  ? <Markdown
    className={getClassNames(styles, ['root', margin, size])}
    disallowedTypes={['HtmlBlock', 'Image', 'Table']}
    source={text} />
  : null
);

export default MarkdownParagraph;
