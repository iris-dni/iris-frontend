import React from 'react';
import Markdown from 'react-markdown';
import styles from 'components/Paragraph/paragraph.scss';
import getClassNames from 'helpers/getClassNames';

const MarkdownParagraph = ({ text, margin }) => (
  <Markdown
    className={getClassNames(styles, ['root', margin])}
    disallowedTypes={['HtmlBlock', 'Image', 'Table']}
    source={text} />
);

export default MarkdownParagraph;
