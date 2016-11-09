import React from 'react';
import styles from './three-up.scss';
import Container from 'components/Container';
import Grid from 'components/Grid';
import GridItem from 'components/GridItem';
import ArticleBlock from 'components/ArticleBlock';
import Paragraph from 'components/Paragraph';

const ThreeUp = ({ columns = [] }) => (
  <section>
    <Container>
      <div className={styles.grid}>
        <Grid>
          {columns.map((column, index) => (
            <GridItem key={index}>
              <ArticleBlock
                title={column.title}
                image={column.image}>
                <Paragraph
                  size={'small'}
                  text={column.text}
                />
              </ArticleBlock>
            </GridItem>
          ))}
        </Grid>
      </div>
    </Container>
  </section>
);

export default ThreeUp;
