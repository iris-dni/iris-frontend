import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import { reduxForm } from 'redux-form';
import domOnlyProps from 'fields/domOnlyProps';

class CreatePetition extends Component {
  sendPetition (data) {
    axios.post('http://api-iris-dev.lovelysystems.com/v1/petitions', {
      data: data
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render () {
    const { fields, handleSubmit, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(data => this.sendPetition(data))}>
        <div>
          <label>First Name</label>
          <div>
            <input
              type='text'
              placeholder='Petition Title'
              {...domOnlyProps(fields.title)}
            />
          </div>
        </div>
        <div>
          <label>Description</label>
          <div>
            <textarea
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
}

CreatePetition.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'simple',
  fields: [
    'title',
    'description',
    'suggested_solution'
  ]
})(CreatePetition);
