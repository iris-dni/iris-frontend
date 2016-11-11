import React from 'react';
import styles from './platform-supporters.scss';
import Section from 'components/Section';
import Container from 'components/Container';
import Image from 'components/Image';

const LogosGrid = ({ items = [] }) => (
  <Section margin>
    <Container>
      <ul className={styles.root}>
        {items.map(item =>
          <li className={styles.item} key={item.name}>
            <div className={styles.image}>
              {item.link &&
                <a href={item.link} className={styles.link}>
                  <Image src={item.image} alt={item.name} />
                </a>
              }
              {!item.link &&
                <Image src={item.image} alt={item.name} />
              }
            </div>
          </li>
        )}
      </ul>
    </Container>
  </Section>
);

export default LogosGrid;
