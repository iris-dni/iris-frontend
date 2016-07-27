import React from 'react';
import PageMain from 'components/PageMain';
import PageContent from 'components/PageContent';
import PageSidebar from 'components/PageSidebar';
import Container from 'components/Container';
import Heading1 from 'components/Heading1';
import Heading2 from 'components/Heading2';
import Paragraph from 'components/Paragraph';
import SupportingCopy from 'components/SupportingCopy';
import ButtonLink from 'components/ButtonLink';

export default (props) => (
  <div>
    <Container>
      <Heading1 text={'Initiativ für bezahlbare Wohnungen'} />
      <PageMain>
        <PageContent>
          <Heading2 text={'Begründung'} />
          <Paragraph>
            {'Der aktuelle Zustand ist nicht akzeptabel. Es gibt keinen sicheren Ort für unsere Kinder in den Park zu spielen. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod velit et viverra feugiat. Morbi finibus eros non elementum tincidunt. Suspendisse in nisl sed lectus molestie lacinia. In sit amet diam sed eros blandit tristique sed quis sapien. Quisque fermentum lobortis nibh sit amet cursus.'}'
          </Paragraph>
          <Heading2 text={'Lösung'} />
          <Paragraph>
            {'Der aktuelle Zustand ist nicht akzeptabel. Es gibt keinen sicheren Ort für unsere Kinder in den Park zu spielen. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod velit et viverra feugiat. Morbi finibus eros non elementum tincidunt. Suspendisse in nisl sed lectus molestie lacinia. In sit amet diam sed eros blandit tristique sed quis sapien. Quisque fermentum lobortis nibh sit amet cursus.'}'
          </Paragraph>
        </PageContent>
        <PageSidebar>
          <SupportingCopy>
            {'Der aktuelle Zustand ist nicht akzeptabel. Es gibt keinen sicheren Ort für unsere Kinder in den Park zu spielen.'}
          </SupportingCopy>
          <Paragraph>
            <ButtonLink href={'#'} text={'Support Cause'} />
          </Paragraph>
        </PageSidebar>
      </PageMain>
    </Container>
  </div>
);
