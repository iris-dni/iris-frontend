import React from 'react';
import { reduxForm } from 'redux-form';
import { createPetition, updatePetition } from 'actions/PetitionActions';
import petitionValidator from 'form/petitionValidator';
import assignPetitionAndId from 'form/assignPetitionAndId';
import Fieldset from 'components/Fieldset';
import FormFieldsIterator from 'components/FormFieldsIterator';
import Button from 'components/Button';
import settings from 'settings';
import FIELDS from './fields';

const PetitionForm = ({ petition, openGraph, fields, handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit((values, dispatch) => petition.persisted
    ? updatePetition(assignPetitionAndId(values, petition), dispatch)
    : createPetition(values, dispatch))}>
    <Fieldset>
      <FormFieldsIterator
        reduxFormFields={fields}
        fieldsArray={FIELDS}
      />
    </Fieldset>
    <Fieldset modifier={'actions'}>
      <Button
        text={settings.petitionForm[petition.persisted ? 'saveButton' : 'createButton']}
        modifier={'accent'}
        disabled={openGraph.isLoading || submitting || !fields._meta.allValid}
      />
    </Fieldset>
  </form>
);

PetitionForm.propTypes = {
  petition: React.PropTypes.object.isRequired,
  openGraph: React.PropTypes.object.isRequired,
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired
};

export const mapStateToProps = ({ openGraph }) => ({ openGraph });

export default reduxForm({
  form: 'petition',
  fields: FIELDS.map(field => field.name),
  validate: petitionValidator,
  // Initialize links field as an array so that we can push values into it later
  initialValues: { links: [] }
}, mapStateToProps)(PetitionForm);
