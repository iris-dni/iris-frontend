import React from 'react';
import { reduxForm } from 'redux-form';
import { createPetition, updatePetition, publishPetition } from 'actions/PetitionActions';
import petitionValidator from 'form/petitionValidator';
import Fieldset from 'components/Fieldset';
import TextField from 'components/TextField';
import FlashMessage from 'components/FlashMessage';
import Button from 'components/Button';
import settings from 'settings';

export const FIELDS = [
  {
    name: 'title',
    element: 'input',
    label: settings.petitionFields.title.label,
    hint: settings.petitionFields.title.hint,
    html: {
      type: 'text',
      placeholder: settings.petitionFields.title.placeholder,
      required: true,
      minLength: 15,
      maxLength: 80
    }
  },
  {
    name: 'description',
    element: 'textarea',
    label: settings.petitionFields.description.label,
    hint: settings.petitionFields.description.hint,
    html: {
      placeholder: settings.petitionFields.description.placeholder,
      required: true,
      minLength: 5,
      maxLength: 500
    }
  },
  {
    name: 'suggested_solution',
    element: 'textarea',
    label: settings.petitionFields.suggested_solution.label,
    hint: settings.petitionFields.suggested_solution.hint,
    html: {
      placeholder: settings.petitionFields.suggested_solution.placeholder,
      maxLength: 500
    }
  },
  {
    name: 'id',
    element: 'input',
    html: {
      type: 'hidden'
    }
  }
];

const PetitionForm = ({ fields, handleSubmit, submitting, hasCreated, publishThePetition }) => (
  <form onSubmit={handleSubmit(hasCreated ? updatePetition : createPetition)}>
    <Fieldset>
      {FIELDS.map(field => (
        <TextField
          key={field.name}
          config={field}
          helper={fields[field.name]}
        />
      ))}
    </Fieldset>
    <Fieldset modifier={'actions'}>
      <Button
        disabled={submitting || !fields._meta.allValid}
        modifier={hasCreated ? 'default' : 'accent'}
        text={settings.petitionForm[hasCreated ? 'saveButton' : 'createButton']}
      />
      {hasCreated &&
        <Button
          type={'button'}
          disabled={submitting || !fields._meta.allValid}
          modifier={'accent'}
          text={settings.petitionForm.publishButton}
          onClick={() => {
            console.log('OK[HSADFPHOUADSBGIPUFDSAPBIU');
            // publishThePetition(hasCreated);
          }}
        />
      }
    </Fieldset>
    {hasCreated &&
      <FlashMessage
        text={'Your petition was successfully saved'}
        type={'success'}
      />
    }
  </form>
);

PetitionForm.propTypes = {
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  resetForm: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired,
  hasCreated: React.PropTypes.number
};

export const mapStateToProps = ({ petition }) => {
  return {
    initialValues: petition && petition.formData,
    hasCreated: petition && petition.formData && petition.formData.id
  };
};

export default reduxForm({
  form: 'simple',
  fields: FIELDS.map(field => field.name),
  validate: petitionValidator
},
mapStateToProps,
{ publishThePetition: publishPetition }
)(PetitionForm);
