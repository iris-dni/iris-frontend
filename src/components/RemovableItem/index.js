import React from 'react';
import RemoveButton from 'components/RemoveButton';
import styles from './remove-item.scss';

const RemovableItem = ({ action, children, inlineBlock }) => (
  <div className={styles[inlineBlock ? 'inline-block' : 'block']}>
    {children}
    <div className={styles.remove}>
      <RemoveButton onClick={action} />
    </div>
  </div>
);

export default RemovableItem;
