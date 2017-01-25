import React from 'react';
import settings from 'settings';
import baseUrl from 'helpers/baseUrl';
import Logo from 'components/Logo';
import styles from './widget-branding.scss';

const LOGO_TEXT = settings.logo;
const LOGO_PATH = settings.logoPath;

const WidgetBranding = () => (
  <p className={styles.root}>
    <span className={styles.text}>{settings.widgets.branding} </span>
    <span className={styles.link}>
      <a href={baseUrl()}
        className={styles[LOGO_PATH ? 'link-image' : 'link-text']}
        target={'_blank'}
        rel={'noopener'}>
        <Logo text={LOGO_TEXT} image={LOGO_PATH} />
      </a>
    </span>
  </p>
);

export default WidgetBranding;
