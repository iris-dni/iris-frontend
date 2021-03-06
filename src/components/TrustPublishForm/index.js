import React from 'react';
import { reduxForm } from 'redux-form';
import settings from 'settings';
import { updatePetition } from 'actions/PetitionActions';
import trustPublishValidator from 'form/trustPublishValidator';
import assignPetitionData from 'form/assignPetitionData';
import Fieldset from 'components/Fieldset';
import FormFieldsIterator from 'components/FormFieldsIterator';
import Button from 'components/Button';
import ButtonLink from 'components/ButtonLink';
import ButtonSet from 'components/ButtonSet';
import FIELDS from './fields';
import trustForm from 'selectors/trustForm';

const TrustPublishForm = ({
  fields,
  handleSubmit,
  trustedFields,
  petition,
  submitting
}) => (
  <form onSubmit={handleSubmit((values, dispatch) => updatePetition(
    assignPetitionData(values, petition), dispatch)
  )}>
    <Fieldset>
      <FormFieldsIterator
        trustedFields={trustedFields}
        reduxFormFields={fields}
        fieldsArray={FIELDS}
      />
    </Fieldset>
    <Fieldset modifier={'actions'}>
      <ButtonSet equal>
        <ButtonLink
          href={`/petitions/${petition.id}/edit`}
          text={settings.trustPage.publish.backButton}
        />
        <Button
          text={settings.trustPage.publish.nextButton}
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
  petition: React.PropTypes.object.isRequired,
  me: React.PropTypes.object.isRequired,
  trustedFields: React.PropTypes.object.isRequired,
  submitting: React.PropTypes.bool.isRequired
};

export const mapStateToProps = ({ petition, me }) => trustForm(petition, me);

export default reduxForm({
  form: 'trustPublish',
  fields: FIELDS.map(field => field.name),
  validate: trustPublishValidator
}, mapStateToProps)(TrustPublishForm);
