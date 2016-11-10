import React from 'react';
import settings from 'settings';
import Container from 'components/Container';
import Link from 'components/Link';
import styles from './site-copyright.scss';

const SiteCopyright = () => (
  <div className={styles.root}>
    <Container>
      <div className={styles['copyright-inner']}>
        <p className={styles.oss}>
          <Link
            modifier={'invert'}
            href={'http://github.com/iris-frontend'}
            external>
            {settings.footer.ossLink}
          </Link>
        </p>
        <ul className={styles.links}>
          <li className={styles.link}>
            <small className={styles.small}>{settings.footer.copyright}</small>
          </li>
          <li className={styles.link}>
            <Link
              modifier={'invert'}
              href={'/imprint'}>
              {settings.footer.imprintLink}
            </Link>
          </li>
          <li className={styles.link}>
            <Link
              modifier={'invert'}
              href={'/terms'}>
              {settings.footer.termsLink}
            </Link>
          </li>
        </ul>
      </div>
    </Container>
  </div>
);

export default SiteCopyright;
