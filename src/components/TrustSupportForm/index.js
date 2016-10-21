import React from 'react';
import settings from 'settings';
import { reduxForm } from 'redux-form';
import { supportPetition } from 'actions/SupportActions';
import trustSupportValidator from 'form/trustSupportValidator';
import assignPetitionData from 'form/assignPetitionData';
import Fieldset from 'components/Fieldset';
import FormFieldsIterator from 'components/FormFieldsIterator';
import Button from 'components/Button';
import ButtonLink from 'components/ButtonLink';
import ButtonSet from 'components/ButtonSet';
import FIELDS from './fields';
import trustForm from 'selectors/trustForm';

const TrustSupportForm = ({
  fields,
  handleSubmit,
  petition,
  mobileConfirmed,
  submitting
}) => (
  <form onSubmit={handleSubmit((values, dispatch) => supportPetition(
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
          href={`/petitions/${petition.id}`}
          text={settings.trustPage.backButton}
        />
        <Button
          text={settings.trustPage[mobileConfirmed ? 'supportNextButtonTrusted' : 'supportNextButton']}
          modifier={'accent'}
          disabled={submitting || petition.isLoading || !fields._meta.allValid}
        />
      </ButtonSet>
    </Fieldset>
  </form>
);

TrustSupportForm.propTypes = {
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  petition: React.PropTypes.object.isRequired,
  me: React.PropTypes.object.isRequired,
  mobileConfirmed: React.PropTypes.bool.isRequired,
  submitting: React.PropTypes.bool.isRequired
};

export const mapStateToProps = ({ petition, me }) => trustForm(petition, me);

export default reduxForm({
  form: 'trustSupport',
  fields: FIELDS.map(field => field.name),
  validate: trustSupportValidator
}, mapStateToProps)(TrustSupportForm);
