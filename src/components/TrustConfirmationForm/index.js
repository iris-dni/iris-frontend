import React from 'react';
import { reduxForm } from 'redux-form';
import { supportPetition } from 'actions/SupportActions';
import trustConfirmationValidator from 'form/trustConfirmationValidator';
import Fieldset from 'components/Fieldset';
import FormFieldsIterator from 'components/FormFieldsIterator';
import Button from 'components/Button';
import FIELDS from './fields';

const supportWithUserData = (data, dispatch) => {
  const userData = Object.assign({}, data);
  return supportPetition(userData, dispatch);
};

const TrustConfirmationForm = ({ fields, handleSubmit, submitting, me }) => (
  <form onSubmit={handleSubmit(supportWithUserData)}>
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
  initialValues: {
    petitionId: petition.id
  },
  me,
  submitting: trust.isSubmitting
});

export default reduxForm({
  form: 'trustConfirmation',
  fields: FIELDS.map(field => field.name),
  validate: trustConfirmationValidator
}, mapStateToProps)(TrustConfirmationForm);
