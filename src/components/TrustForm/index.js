import React from 'react';
import { reduxForm } from 'redux-form';
import { supportPetition } from 'actions/SupportActions';
import trustValidator from 'form/trustValidator';
import Fieldset from 'components/Fieldset';
import FormFieldsIterator from 'components/FormFieldsIterator';
import Button from 'components/Button';
import FIELDS_SUPPORTING from './fieldsForSupporting';
import trustForm from 'selectors/trustForm';

const TrustForm = ({ fields, handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit(supportPetition)}>
    <Fieldset>
      <FormFieldsIterator
        reduxFormFields={fields}
        fieldsArray={FIELDS_SUPPORTING}
      />
    </Fieldset>
    <Fieldset modifier={'actions'}>
      <Button
        text={'Go to verification'}
        modifier={'accent'}
        disabled={submitting || !fields._meta.allValid}
      />
    </Fieldset>
  </form>
);

TrustForm.propTypes = {
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired
};

export const mapStateToProps = ({ petition, me, trust }) => trustForm(petition, me, trust);

export default reduxForm({
  form: 'trust',
  fields: FIELDS_SUPPORTING.map(field => field.name),
  validate: trustValidator
}, mapStateToProps)(TrustForm);
