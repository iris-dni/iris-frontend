import React from 'react';
import styles from './section.scss';
import getClassNames from 'helpers/getClassNames';

const Section = ({ children, theme, padding, margin, element = 'section' }) => React.createElement(
  element,
  Object.assign({}, {
    className: getClassNames(
      styles,
      [(theme || 'default'), (padding ? 'padding' : ''), (margin ? 'margin' : '')]
    )
  }),
  children
);

export default Section;
