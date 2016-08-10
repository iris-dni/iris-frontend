import React from 'react';
import styles from './icon.scss';

const Icon = ({ id, size }) => {
  const useEl = `<use xlink:href="/dist/assets/images/icons.svg#${id}" />`;

  const sizeClass = size || 'default';

  return (
    <svg className={styles[sizeClass]} dangerouslySetInnerHTML={{ __html: useEl }} />
  );
};

export default Icon;
