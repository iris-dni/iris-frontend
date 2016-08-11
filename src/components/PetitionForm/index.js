import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

export const fields = [ 'firstName', 'lastName', 'notes' ];

class CreatePetition extends Component {
  render () {
    const {
      fields: { firstName, lastName, notes },
      handleSubmit,
      submitting
      } = this.props;

    return (
      <form onSubmit={handleSubmit(data => console.log(data))}>
        <div>
          <label>First Name</label>
          <div>
            <input type='text' placeholder='First Name' {...firstName} />
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <input type='text' placeholder='Last Name' {...lastName} />
          </div>
        </div>
        <div>
          <label>Notes</label>
          <div>
            <textarea
              {...notes}
              // required for reset form to work (only on textarea's)
              // see: https://github.com/facebook/react/issues/2533
              value={notes.value || ''} />
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
}

CreatePetition.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'simple',
  fields
})(CreatePetition);
