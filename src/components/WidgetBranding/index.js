import React from 'react';
import settings from 'settings';
import baseUrl from 'helpers/baseUrl';
import Link from 'components/Link';
import styles from './widget-branding.scss';

const WidgetBranding = () => (
  <div className={styles.root}>
    <span className={styles.text}>This petition is shared via </span>
    <span className={styles.link}>
      <Link
        href={baseUrl()}
        text={settings.logo}
        external
        newTab
      />
    </span>
  </div>
);

export default WidgetBranding;
