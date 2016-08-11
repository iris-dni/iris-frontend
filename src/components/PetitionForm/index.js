import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import domOnlyProps from 'fields/domOnlyProps';

export const fields = [
  'firstName',
  'lastName',
  'comment'
];

class CreatePetition extends Component {
  render () {
    const { fields, handleSubmit, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(data => console.log(data))}>
        <div>
          <label>First Name</label>
          <div>
            <input
              type='text'
              placeholder='First Name'
              {...domOnlyProps(fields.firstName)}
            />
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <input
              type='text'
              placeholder='Last Name'
              {...domOnlyProps(fields.lastName)}
            />
          </div>
        </div>
        <div>
          <label>Notes</label>
          <div>
            <textarea
              {...domOnlyProps(fields.comment)}
              // required for reset form to work (only on textarea's)
              // see: https://github.com/facebook/react/issues/2533
              value={fields.comment.value || ''} />
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
