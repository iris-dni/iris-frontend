import React from 'react';
import styles from './icon.scss';

const getClassname = (size, modifier, inline) => {
  return [
    styles[size || 'default'],
    styles[modifier || 'default'],
    styles[inline ? 'inline' : '']
  ].join(' ');
};

const Icon = ({ id, size, modifier, inline }) => {
  const useEl = `<use class="${styles.use}" xlink:href="/dist/assets/images/icons.svg#${id}" />`;

  return (
    <svg className={getClassname(size, modifier, inline)} dangerouslySetInnerHTML={{ __html: useEl }} />
  );
};

export default Icon;
