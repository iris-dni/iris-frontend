import React from 'react';
import styles from './widget-title.scss';
import Heading1 from 'components/Heading1';

const WidgetTitle = ({ title }) => (
  <div className={styles.title}>
    <Heading1 text={title} />
  </div>
);

export default WidgetTitle;
