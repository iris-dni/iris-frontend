import React from 'react';
import { reduxForm } from 'redux-form';
import domOnlyProps from 'form/domOnlyProps';
import petitionValidator from 'form/petitionValidator';
import { createPetition } from 'actions/PetitionActions';
import settings from 'settings';

export const FIELDS = [
  'title',
  'description',
  'suggested_solution'
];

const PetitionForm = React.createClass({
  render () {
    const { fields, handleSubmit, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(data => createPetition(data))}>
        <div>
          <label for='petitionTitle'>
            {settings.petitionFields.title.label}
          </label>
          <em>
            {settings.petitionFields.title.hint}
          </em>
          <div>
            <input
              id='petitionTitle'
              type='text'
              placeholder={settings.petitionFields.title.placeholder}
              // domOnlyProps required with latest react and redux-form 5.x
              // see: https://github.com/erikras/redux-form/issues/1441#issuecomment-236966387
              {...domOnlyProps(fields.title)}
            />
            {fields.title.touched && fields.title.error && <strong>{fields.title.error}</strong>}
          </div>
        </div>
        <div>
          <label for='petitionDescription'>
            {settings.petitionFields.description.label}
          </label>
          <em>
            {settings.petitionFields.description.hint}
          </em>
          <div>
            <textarea
              id='petitionDescription'
              placeholder={settings.petitionFields.description.placeholder}
              // domOnlyProps required with latest react and redux-form 5.x
              // see: https://github.com/erikras/redux-form/issues/1441#issuecomment-236966387
              {...domOnlyProps(fields.description)}
              // required for reset form to work (only on textarea's)
              // see: https://github.com/facebook/react/issues/2533
              value={fields.description.value || ''} />
            {fields.description.touched && fields.description.error && <strong>{fields.description.error}</strong>}
          </div>
        </div>
        <div>
          <label for='petitionSolution'>
            {settings.petitionFields.suggested_solution.label}
          </label>
          <em>
            {settings.petitionFields.suggested_solution.hint}
          </em>
          <div>
            <textarea
              id='petitionSolution'
              placeholder={settings.petitionFields.suggested_solution.placeholder}
              // domOnlyProps required with latest react and redux-form 5.x
              // see: https://github.com/erikras/redux-form/issues/1441#issuecomment-236966387
              {...domOnlyProps(fields.suggested_solution)}
              // required for reset form to work (only on textarea's)
              // see: https://github.com/facebook/react/issues/2533
              value={fields.suggested_solution.value || ''} />
            {fields.suggested_solution.touched && fields.suggested_solution.error && <strong>{fields.suggested_solution.error}</strong>}
          </div>
        </div>
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
  fields: FIELDS,
  validate: petitionValidator
})(PetitionForm);
