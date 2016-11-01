import React from 'react';
import settings from 'settings';
import baseUrl from 'helpers/baseUrl';
import Link from 'components/Link';
import styles from './widget-branding.scss';

const WidgetBranding = () => (
  <p className={styles.root}>
    <span className={styles.text}>{settings.widgets.branding} </span>
    <span className={styles.link}>
      <Link
        href={baseUrl()}
        text={settings.logo}
        external
        newTab
      />
    </span>
  </p>
);

export default WidgetBranding;
