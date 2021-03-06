import React from 'react';
import { reduxForm } from 'redux-form';
import { respondToPetition } from 'actions/RespondActions';
import petitionResponseValidator from 'form/petitionResponseValidator';
import Fieldset from 'components/Fieldset';
import FormFieldsIterator from 'components/FormFieldsIterator';
import Button from 'components/Button';
import settings from 'settings';
import FIELDS from './fields';

const RespondToPetitionForm = ({ petition, petitionResponse, fields, handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit(respondToPetition)}>
    <Fieldset>
      <FormFieldsIterator
        reduxFormFields={fields}
        fieldsArray={FIELDS}
      />
    </Fieldset>
    <Fieldset modifier={'actions'}>
      <Button
        text={settings.respondToPetitionForm.publishButton}
        modifier={'accent'}
        disabled={submitting || !fields._meta.allValid || petitionResponse.isLoading}
      />
    </Fieldset>
  </form>
);

RespondToPetitionForm.propTypes = {
  petition: React.PropTypes.object.isRequired,
  petitionResponse: React.PropTypes.object.isRequired,
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'response',
  fields: FIELDS.map(field => field.name),
  validate: petitionResponseValidator
})(RespondToPetitionForm);
