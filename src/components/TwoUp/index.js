import React from 'react';
import styles from './two-up.scss';
import Section from 'components/Section';
import Container from 'components/Container';
import Grid from 'components/Grid';
import GridItem from 'components/GridItem';
import ArticleBlock from 'components/ArticleBlock';
import MarkdownParagraph from 'components/MarkdownParagraph';
import ButtonLink from 'components/ButtonLink';

const Two = ({ theme, columns = [] }) => (
  <Section
    padding={theme || false}
    margin={!theme || false}
    theme={theme}>
    <Container>
      <div className={styles.grid}>
        <Grid>
          {columns.map((column, index) => (
            <GridItem cols={2} key={index}>
              <ArticleBlock
                title={column.title}
                image={column.image}>
                <MarkdownParagraph
                  size={'small'}
                  text={column.text}
                />
                {column.button &&
                  <ButtonLink {...column.button} />
                }
              </ArticleBlock>
            </GridItem>
          ))}
        </Grid>
      </div>
    </Container>
  </Section>
);

export default Two;
