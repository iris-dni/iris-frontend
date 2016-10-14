import React from 'react';
import { reduxForm } from 'redux-form';
import { supportPetition } from 'actions/SupportActions';
import trustPublishValidator from 'form/trustPublishValidator';
import Fieldset from 'components/Fieldset';
import FormFieldsIterator from 'components/FormFieldsIterator';
import Button from 'components/Button';
import ButtonLink from 'components/ButtonLink';
import ButtonSet from 'components/ButtonSet';
import FIELDS from './fields';
import trustForm from 'selectors/trustForm';

const TrustPublishForm = ({ fields, handleSubmit, submitting, petitionId }) => (
  <form onSubmit={handleSubmit(supportPetition)}>
    <Fieldset>
      <FormFieldsIterator
        reduxFormFields={fields}
        fieldsArray={FIELDS}
      />
    </Fieldset>
    <Fieldset modifier={'actions'}>
      <ButtonSet>
        <ButtonLink
          href={`/petitions/${petitionId}`}
          text={'Back to petition'}
        />
        <Button
          text={'Go to verification'}
          modifier={'accent'}
          disabled={submitting || !fields._meta.allValid}
        />
      </ButtonSet>
    </Fieldset>
  </form>
);

TrustPublishForm.propTypes = {
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired
};

export const mapStateToProps = ({ petition, me, trust }) => trustForm(petition, me, trust);

export default reduxForm({
  form: 'trust',
  fields: FIELDS.map(field => field.name),
  validate: trustPublishValidator
}, mapStateToProps)(TrustPublishForm);
