import React from 'react';
import styles from './article-block.scss';
import Heading2 from 'components/Heading2';
import Icon from 'components/Icon';

const ArticleBlock = ({ title, icon, children }) => {
  return (
    <article className={styles.root} id='response'>
      <header className={styles.top}>
        {icon &&
          <span className={styles.icon}>
            <Icon id={icon} size='small' />
          </span>
        }
        <Heading2 text={title} />
      </header>
      {children}
    </article>
  );
};

export default ArticleBlock;
