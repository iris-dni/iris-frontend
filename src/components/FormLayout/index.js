import React from 'react';
import styles from './form-layout.scss';
import Container from 'components/Container';
import FormWrapper from 'components/FormWrapper';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';

const FormLayout = ({ children, title, intro }) => (
  <Container>
    <FormWrapper>
      <Header>
        <PageTitle
          title={title}
          intro={intro}
        />
      </Header>
      <div className={styles.form}>
        {children}
      </div>
    </FormWrapper>
  </Container>
);

export default FormLayout;
