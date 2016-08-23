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
    name: 'id',
    element: 'input',
    hidden: true,
    html: {
      type: 'hidden'
    }
  },
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
  }
];

const PetitionForm = ({ petition, fields, handleSubmit, submitting, persisted, published, publishPetition }) => (
  <form onSubmit={handleSubmit(persisted ? updatePetition : createPetition)}>
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
        modifier={persisted ? 'default' : 'accent'}
        text={settings.petitionForm[persisted ? 'saveButton' : 'createButton']}
      />
      {persisted && !published &&
        <Button
          type={'button'}
          disabled={submitting || !fields._meta.allValid}
          modifier={'accent'}
          text={settings.petitionForm.publishButton}
          onClick={() => publishPetition(petition)}
        />
      }
    </Fieldset>
    {persisted &&
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
  persisted: React.PropTypes.bool,
  published: React.PropTypes.bool
};

export const mapStateToProps = ({ petition }) => {
  return {
    initialValues: petition,
    petition,
    persisted: petition && !!petition.id,
    published: petition && petition.state && petition.state.parent === 'supportable'
  };
};

export const mapDispatchToProps = (dispatch) => ({
  publishPetition: (petition) => dispatch(publishPetition(petition))
});

export default reduxForm({
  form: 'simple',
  fields: FIELDS.map(field => field.name),
  validate: petitionValidator
}, mapStateToProps, mapDispatchToProps)(PetitionForm);
