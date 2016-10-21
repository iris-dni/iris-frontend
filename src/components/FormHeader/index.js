import React from 'react';
import styles from './form-header.scss';
import FormWrapper from 'components/FormWrapper';
import Header from 'components/Header';
import PageTitle from 'components/PageTitle';

const FormHeader = ({ title, intro, children }) => (
  <FormWrapper>
    <Header>
      <div className={styles.title}>
        <PageTitle
          title={title}
          intro={intro}
        />
        {children || null}
      </div>
    </Header>
  </FormWrapper>
);

export default FormHeader;
