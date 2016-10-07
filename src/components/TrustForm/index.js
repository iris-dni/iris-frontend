import React from 'react';
import { reduxForm } from 'redux-form';
import { supportPetition } from 'actions/SupportActions';
import trustValidator from 'form/trustValidator';
import Fieldset from 'components/Fieldset';
import FormFieldsIterator from 'components/FormFieldsIterator';
import Button from 'components/Button';
import FIELDS from './fields';

const TrustForm = ({ fields, handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit(supportPetition)}>
    <Fieldset>
      <FormFieldsIterator
        reduxFormFields={fields}
        fieldsArray={FIELDS}
      />
    </Fieldset>
    <Fieldset modifier={'actions'}>
      <Button
        text={'Proceed'}
        modifier={'accent'}
        disabled={submitting || !fields._meta.allValid}
      />
    </Fieldset>
  </form>
);

TrustForm.propTypes = {
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired
};

export const mapStateToProps = ({ petition, me }) => ({
  initialValues: {
    id: petition.id,
    user: me || {}
  }
});

export default reduxForm({
  form: 'trust',
  fields: FIELDS.map(field => field.name),
  validate: trustValidator
}, mapStateToProps)(TrustForm);
