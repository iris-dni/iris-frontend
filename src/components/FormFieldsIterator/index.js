import React from 'react';
import { get } from 'lodash/object';
import FormField from 'components/FormField';
import styles from './form-field-iterator.scss';

const FormFieldsIterator = ({ reduxFormFields, fieldsArray = [] }) => (
  <div className={styles.root}>
    {fieldsArray.map(field => (
      <div key={field.name} className={field.half ? styles['field-half'] : styles.field}>
        <FormField
          key={field.name}
          config={field}
          helper={get(reduxFormFields, field.name)}
        />
      </div>
    ))}
  </div>
);

export default FormFieldsIterator;
