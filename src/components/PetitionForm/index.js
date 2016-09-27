import React from 'react';
import { reduxForm } from 'redux-form';
import { createPetition, updatePetition } from 'actions/PetitionActions';
import petitionValidator from 'form/petitionValidator';
import Fieldset from 'components/Fieldset';
import FormField from 'components/FormField';
import Button from 'components/Button';
import settings from 'settings';
import FIELDS from './fields';

const PetitionForm = ({ petition, openGraph, fields, handleSubmit, submitting }) => {
  return (
    <form onSubmit={handleSubmit(petition.persisted
      ? updatePetition
      : createPetition)}>
      <Fieldset>
        {FIELDS.map(field => (
          <FormField
            key={field.name}
            config={field}
            helper={fields[field.name.replace('[]', '')]}
          />
        ))}
      </Fieldset>
      <Fieldset modifier={'actions'}>
        <Button
          text={settings.petitionForm[petition.persisted ? 'saveButton' : 'createButton'].text}
          modifier={'accent'}
          disabled={openGraph.isLoading || submitting || !fields._meta.allValid}
        />
      </Fieldset>
    </form>
  );
};

PetitionForm.propTypes = {
  petition: React.PropTypes.object.isRequired,
  openGraph: React.PropTypes.object.isRequired,
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'simple',
  fields: FIELDS.map(field => field.name),
  validate: petitionValidator
})(PetitionForm);
