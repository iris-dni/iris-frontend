import React from 'react';
import { assign } from 'lodash/object';
import styles from './section.scss';
import getClassNames from 'helpers/getClassNames';

const Section = ({ children, theme, padding, margin, element = 'section' }) => React.createElement(
  element,
  assign({}, {
    className: getClassNames(
      styles,
      [(theme || 'default'), (padding ? 'padding' : ''), (margin ? 'margin' : '')]
    )
  }),
  children
);

export default Section;
