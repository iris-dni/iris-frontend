import React from 'react';
import Markdown from 'react-markdown';
import styles from 'components/Paragraph/paragraph.scss';
import getClassNames from 'helpers/getClassNames';

const MarkdownParagraph = ({ text, margin }) => (
  <Markdown
    className={getClassNames(styles, ['root', margin])}
    disallowedTypes={['HtmlBlock', 'Image']}
    source={text} />
);

export default MarkdownParagraph;
