import React from 'react';
import { reduxForm } from 'redux-form';
import trustConfirmationValidator from 'form/trustConfirmationValidator';
import assignUserData from 'form/assignUserData';
import Fieldset from 'components/Fieldset';
import FormFieldsIterator from 'components/FormFieldsIterator';
import Button from 'components/Button';
import ButtonLink from 'components/ButtonLink';
import ButtonSet from 'components/ButtonSet';
import FIELDS from './fields';
import { supportPetition } from 'actions/SupportActions';
import trustForm from 'selectors/trustForm';

const TrustConfirmationForm = ({ fields, handleSubmit, submitting, me, petitionId }) => (
  <form onSubmit={handleSubmit((values, dispatch) => supportPetition(
    assignUserData(values, me), dispatch)
  )}>
    <Fieldset>
      <FormFieldsIterator
        reduxFormFields={fields}
        fieldsArray={FIELDS}
      />
    </Fieldset>
    <Fieldset modifier={'actions'}>
      <ButtonSet>
        <ButtonLink
          href={`/trust/support/${petitionId}`}
          text={'Back to details'}
        />
        <Button
          text={'Complete verification'}
          modifier={'accent'}
          disabled={submitting || !fields._meta.allValid}
        />
      </ButtonSet>
    </Fieldset>
  </form>
);

TrustConfirmationForm.propTypes = {
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  me: React.PropTypes.object.isRequired,
  submitting: React.PropTypes.bool.isRequired
};

export const mapStateToProps = ({ petition, me, trust }) => trustForm(petition, me, trust);

export default reduxForm({
  form: 'trustConfirmation',
  fields: FIELDS.map(field => field.name),
  validate: trustConfirmationValidator
}, mapStateToProps)(TrustConfirmationForm);
