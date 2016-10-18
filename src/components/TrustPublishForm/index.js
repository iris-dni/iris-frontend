import React from 'react';
import { reduxForm } from 'redux-form';
import { updatePetition } from 'actions/PetitionActions';
import trustPublishValidator from 'form/trustPublishValidator';
import assignPetitionData from 'form/assignPetitionData';
import Fieldset from 'components/Fieldset';
import FormFieldsIterator from 'components/FormFieldsIterator';
import Button from 'components/Button';
import ButtonSet from 'components/ButtonSet';
import FIELDS from './fields';
import trustForm from 'selectors/trustForm';

const TrustPublishForm = ({
  fields,
  handleSubmit,
  submitting,
  petition
}) => (
  <form onSubmit={handleSubmit((values, dispatch) => updatePetition(
    assignPetitionData(values, petition), dispatch)
  )}>
    <Fieldset>
      <FormFieldsIterator
        reduxFormFields={fields}
        fieldsArray={FIELDS}
      />
    </Fieldset>
    <Fieldset modifier={'actions'}>
      <ButtonSet>
        <Button
          text={'Preview petition'}
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
  form: 'trustPublish',
  fields: FIELDS.map(field => field.name),
  validate: trustPublishValidator
}, mapStateToProps)(TrustPublishForm);
