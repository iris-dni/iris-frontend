import React from 'react';
import { reduxForm } from 'redux-form';
import petitionValidator from 'form/petitionValidator';
import Fieldset from 'components/Fieldset';
import FormField from 'components/FormField';
import Button from 'components/Button';
import FIELDS from './fields';

const TrustForm = ({ fields, handleSubmit, submitting }) => (
  <form onSubmit={() => {}}>
    <Fieldset>
      {FIELDS.map(field => (
        <FormField
          key={field.name}
          config={field}
          helper={fields[field.name]}
        />
      ))}
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

export const mapStateToProps = ({ openGraph }) => ({
  openGraph
});

export default reduxForm({
  form: 'trust',
  fields: FIELDS.map(field => field.name),
  validate: petitionValidator
}, mapStateToProps)(TrustForm);
