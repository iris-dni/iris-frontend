import React from 'react';
import { reduxForm } from 'redux-form';
import domOnlyProps from 'fields/domOnlyProps';
import { createPetition } from 'actions/PetitionActions';

const PetitionForm = React.createClass({
  render () {
    const { fields, handleSubmit, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(data => createPetition(data))}>
        <div>
          <label>Petition Title</label>
          <div>
            <input
              type='text'
              placeholder='Petition Title'
              // domOnlyProps required with latest react and redux-form 5.x
              // see: https://github.com/erikras/redux-form/issues/1441#issuecomment-236966387
              {...domOnlyProps(fields.title)}
            />
          </div>
        </div>
        <div>
          <label>Description</label>
          <div>
            <textarea
              // domOnlyProps required with latest react and redux-form 5.x
              // see: https://github.com/erikras/redux-form/issues/1441#issuecomment-236966387
              {...domOnlyProps(fields.description)}
              // required for reset form to work (only on textarea's)
              // see: https://github.com/facebook/react/issues/2533
              value={fields.description.value || ''} />
          </div>
        </div>
        <div>
          <label>Suggested solution</label>
          <div>
            <textarea
              // domOnlyProps required with latest react and redux-form 5.x
              // see: https://github.com/erikras/redux-form/issues/1441#issuecomment-236966387
              {...domOnlyProps(fields.suggested_solution)}
              // required for reset form to work (only on textarea's)
              // see: https://github.com/facebook/react/issues/2533
              value={fields.suggested_solution.value || ''} />
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
  fields: [
    'title',
    'description',
    'suggested_solution'
  ]
})(PetitionForm);
