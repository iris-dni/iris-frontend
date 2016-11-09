import React from 'react';
import styles from './article-block.scss';
import Heading2 from 'components/Heading2';
import Icon from 'components/Icon';
import Image from 'components/Image';

const ArticleBlock = ({ title, icon, children, image }) => {
  return (
    <article className={styles.root} id='response'>
      {image &&
        <div className={styles.image}>
          <Image {...image} />
        </div>
      }
      <header className={styles.top}>
        {icon &&
          <span className={styles.icon}>
            <Icon id={icon} />
          </span>
        }
        <Heading2 text={title} />
      </header>
      {children}
    </article>
  );
};

export default ArticleBlock;
