import React from 'react';
import { reduxForm } from 'redux-form';
import { publishPetition } from 'actions/PetitionActions';
import trustConfirmationValidator from 'form/trustConfirmationValidator';
import assignPetitionData from 'form/assignPetitionData';
import Fieldset from 'components/Fieldset';
import FormFieldsIterator from 'components/FormFieldsIterator';
import Button from 'components/Button';
import ButtonLink from 'components/ButtonLink';
import ButtonSet from 'components/ButtonSet';
import FIELDS from './fields';
import trustForm from 'selectors/trustForm';

const TrustPublishConfirmationForm = ({
  fields,
  handleSubmit,
  me,
  petition,
  submitting
}) => (
  <form onSubmit={handleSubmit((values, dispatch) => publishPetition(
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
        <ButtonLink
          href={`/petitions/${petition.id}/preview`}
          text={'Back to preview'}
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

TrustPublishConfirmationForm.propTypes = {
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  me: React.PropTypes.object.isRequired,
  petition: React.PropTypes.object.isRequired,
  submitting: React.PropTypes.bool.isRequired
};

export const mapStateToProps = ({ petition, me, trust }) => trustForm(petition, me, trust);

export default reduxForm({
  form: 'trustPublishConfirmation',
  fields: FIELDS.map(field => field.name),
  validate: trustConfirmationValidator
},
  mapStateToProps
)(TrustPublishConfirmationForm);
