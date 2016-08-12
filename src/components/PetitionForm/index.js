import React from 'react';
import { reduxForm } from 'redux-form';
import { createPetition } from 'actions/PetitionActions';
import petitionValidator from 'form/petitionValidator';
import TextField from 'form/TextField';

export const FIELDS = [
  {
    name: 'title',
    type: 'input'
  },
  {
    name: 'description',
    type: 'textarea'
  },
  {
    name: 'suggested_solution',
    type: 'textarea'
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
