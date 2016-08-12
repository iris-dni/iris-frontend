import React from 'react';
import { reduxForm } from 'redux-form';
import { createPetition } from 'actions/PetitionActions';
import petitionValidator from 'form/petitionValidator';
import TextField from 'form/TextField';
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
      maxLength: 50
    }
  },
  {
    name: 'suggested_solution',
    element: 'textarea',
    label: settings.petitionFields.suggested_solution.label,
    hint: settings.petitionFields.suggested_solution.hint,
    html: {
      placeholder: settings.petitionFields.suggested_solution.placeholder,
      required: true,
      minLength: 10,
      maxLength: 50
    }
  }
];

const PetitionForm = React.createClass({
  render () {
    const { fields, handleSubmit, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(data => createPetition(data))}>
        {FIELDS.map(field => (
          <TextField
            key={field.name}
            config={field}
            helper={fields[field.name]}
          />
        ))}
        <div>
          <button type='submit' disabled={submitting}>
            {submitting ? <i /> : <i />} Submit
          </button>
        </div>
      </form>
    );
  }
});

PetitionForm.propTypes = {
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  resetForm: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'simple',
  fields: FIELDS.map(field => field.name),
  validate: petitionValidator
})(PetitionForm);
