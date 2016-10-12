import React from 'react';
import { reduxForm } from 'redux-form';
import trustConfirmationValidator from 'form/trustConfirmationValidator';
import assignUserData from 'form/assignUserData';
import Fieldset from 'components/Fieldset';
import FormFieldsIterator from 'components/FormFieldsIterator';
import Button from 'components/Button';
import FIELDS from './fields';
import { supportPetition } from 'actions/SupportActions';

const TrustConfirmationForm = ({ fields, handleSubmit, submitting, me }) => (
  <form onSubmit={handleSubmit((values, dispatch) => supportPetition(
    assignUserData(values, me), dispatch)
  )}>
    <Fieldset>
      <FormFieldsIterator
        reduxFormFields={fields}
        fieldsArray={FIELDS}
      />
    </Fieldset>
    <Fieldset modifier={'actions'}>
      <Button
        text={'Complete verification'}
        modifier={'accent'}
        disabled={submitting || !fields._meta.allValid}
      />
    </Fieldset>
  </form>
);

TrustConfirmationForm.propTypes = {
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired
};

export const mapStateToProps = ({ petition, me, trust }) => ({
  me,
  initialValues: {
    petitionId: petition.id
  },
  submitting: trust.isSubmitting
});

export default reduxForm({
  form: 'trustConfirmation',
  fields: FIELDS.map(field => field.name),
  validate: trustConfirmationValidator
}, mapStateToProps)(TrustConfirmationForm);
