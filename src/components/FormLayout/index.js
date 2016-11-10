import React from 'react';
import styles from './form-layout.scss';
import Container from 'components/Container';
import FormWrapper from 'components/FormWrapper';
import FormHeader from 'components/FormHeader';

const FormLayout = ({ children, title, intro }) => (
  <div className={styles.root}>
    <Container>
      <FormHeader
        title={title}
        intro={intro}
      />
      <FormWrapper>
        {children}
      </FormWrapper>
    </Container>
  </div>
);

export default FormLayout;
