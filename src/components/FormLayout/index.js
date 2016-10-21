import React from 'react';
import styles from './form-layout.scss';
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
      <div className={styles.form}>
        {children}
      </div>
    </FormWrapper>
  </Container>
);

export default FormLayout;
