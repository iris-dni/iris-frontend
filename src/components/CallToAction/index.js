import React from 'react';
import styles from './call-to-action.scss';
import Section from 'components/Section';
import Heading2 from 'components/Heading2';
import TextCenter from 'components/TextCenter';
import Container from 'components/Container';
import Paragraph from 'components/Paragraph';
import ButtonLink from 'components/ButtonLink';
import Background from 'components/Background';

const CallToAction = ({ title, text, buttonText, buttonLink, theme, background }) => (
  <div className={styles[theme || 'root']}>
    <Section padding>
      <Background image={background} color={theme} />
      <Container>
        <div className={styles.inner}>
          <TextCenter>
            <Heading2 text={title} size='large' />
            <Paragraph size='small'>{text}</Paragraph>
            <ButtonLink
              text={buttonText}
              modifier={theme ? 'light' : 'accent'}
              href={buttonLink}
            />
          </TextCenter>
        </div>
      </Container>
    </Section>
  </div>
);

export default CallToAction;
