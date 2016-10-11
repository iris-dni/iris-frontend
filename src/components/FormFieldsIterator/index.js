import React from 'react';
import { get } from 'lodash/object';
import FormField from 'components/FormField';

const FormWrapper = ({ reduxFormFields, fieldsArray = [] }) => (
  <div>
    {fieldsArray.map(field => (
      <FormField
        key={field.name}
        config={field}
        helper={get(reduxFormFields, field.name)}
      />
    ))}
  </div>
);

export default FormWrapper;
