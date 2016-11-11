import React from 'react';
import Section from 'components/Section';
import Container from 'components/Container';
import Grid from 'components/Grid';
import GridItem from 'components/GridItem';
import ArticleBlock from 'components/ArticleBlock';
import MarkdownParagraph from 'components/MarkdownParagraph';
import TextCenter from 'components/TextCenter';
import BlockContainer from 'components/BlockContainer';
import Heading2 from 'components/Heading2';
import ButtonLink from 'components/ButtonLink';

const ContentGrid = ({ theme, title, columnCount = 2, columns = [] }) => (
  <Section
    padding={theme || false}
    margin={!theme || false}
    theme={theme}>
    <Container>
      {title &&
        <BlockContainer>
          <TextCenter>
            <Heading2 text={title} size={'large'} />
          </TextCenter>
        </BlockContainer>
      }
      <Grid>
        {columns.map((column, index) => (
          <GridItem cols={columnCount} key={index}>
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
    </Container>
  </Section>
);

export default ContentGrid;
