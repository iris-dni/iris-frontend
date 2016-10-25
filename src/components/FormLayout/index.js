import React from 'react';
import Container from 'components/Container';
import FormWrapper from 'components/FormWrapper';
import FormHeader from 'components/FormHeader';

const FormLayout = ({ children, title, intro }) => (
  <Container>
    <FormHeader
      title={title}
      intro={intro}
    />
    <FormWrapper>
      {children}
    </FormWrapper>
  </Container>
);

export default FormLayout;
