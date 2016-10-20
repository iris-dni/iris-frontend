import React from 'react';
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

TrustSupportForm.propTypes = {
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  petition: React.PropTypes.object.isRequired,
  me: React.PropTypes.object.isRequired,
  submitting: React.PropTypes.bool.isRequired
};

export const mapStateToProps = ({ petition, me, trust }) => trustForm(petition, me, trust);

export default reduxForm({
  form: 'trustSupport',
  fields: FIELDS.map(field => field.name),
  validate: trustSupportValidator
}, mapStateToProps)(TrustSupportForm);
