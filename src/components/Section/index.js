import React from 'react';
import styles from './section.scss';
import getClassNames from 'helpers/getClassNames';

const Section = ({ children, theme, padded }) => (
  <div className={getClassNames(styles, [(theme || 'default'), (padded ? 'padded' : '')])}>
    {children}
  </div>
);

export default Section;
