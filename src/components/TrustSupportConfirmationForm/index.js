import React from 'react';
import { reduxForm } from 'redux-form';
import settings from 'settings';
import { supportPetition } from 'actions/SupportActions';
import trustSupportConfirmationValidator from 'form/trustSupportConfirmationValidator';
import assignUserAndPetitionData from 'form/assignUserAndPetitionData';
import Fieldset from 'components/Fieldset';
import FormFieldsIterator from 'components/FormFieldsIterator';
import Button from 'components/Button';
import ButtonLink from 'components/ButtonLink';
import ButtonSet from 'components/ButtonSet';
import FIELDS from './fields';
import trustForm from 'selectors/trustForm';
import hasValidSupportUserData from 'helpers/hasValidSupportUserData';

const TrustSupportConfirmationForm = ({
  fields,
  handleSubmit,
  me,
  petition,
  submitting
}) => (
  <form onSubmit={handleSubmit((values, dispatch) => supportPetition(
    assignUserAndPetitionData(values, me, petition), dispatch)
  )}>
    <Fieldset>
      <FormFieldsIterator
        reduxFormFields={fields}
        fieldsArray={FIELDS}
      />
    </Fieldset>
    <Fieldset modifier={'actions'}>
      <ButtonSet equal>
        <ButtonLink
          href={`/trust/support/${petition.id}`}
          text={settings.trustConfirmationForm.backButton}
        />
        <Button
          text={settings.trustConfirmationForm.saveButton}
          modifier={'accent'}
          disabled={!hasValidSupportUserData(me) || submitting || !fields._meta.allValid}
        />
      </ButtonSet>
    </Fieldset>
  </form>
);

TrustSupportConfirmationForm.propTypes = {
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  supportPetition: React.PropTypes.func.isRequired,
  petition: React.PropTypes.object.isRequired,
  me: React.PropTypes.object.isRequired,
  submitting: React.PropTypes.bool.isRequired
};

export const mapStateToProps = ({ petition, me }) => trustForm(petition, me);

export default reduxForm({
  form: 'trustSupportConfirmation',
  fields: FIELDS.map(field => field.name),
  validate: trustSupportConfirmationValidator
}, mapStateToProps)(TrustSupportConfirmationForm);
