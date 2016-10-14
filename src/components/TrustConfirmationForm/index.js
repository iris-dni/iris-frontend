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
import { supportPetition, resendVerification } from 'actions/SupportActions';
import trustForm from 'selectors/trustForm';
import hasValidUserData from 'helpers/hasValidUserData';

const TrustConfirmationForm = ({
  fields,
  handleSubmit,
  resendVerification,
  me,
  petitionId,
  submitting
}) => (
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
          onClick={() => resendVerification(petitionId, me)}
          disabled={!hasValidUserData(me)}
          type={'button'}
          text={'Re-send SMS'}
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
  resendVerification: React.PropTypes.func.isRequired,
  me: React.PropTypes.object.isRequired,
  petitionId: React.PropTypes.string.isRequired,
  submitting: React.PropTypes.bool.isRequired
};

export const mapStateToProps = ({ petition, me, trust }) => trustForm(petition, me, trust);

export const mapDispatchToProps = (dispatch) => ({
  resendVerification: (petitionId, user) => dispatch(resendVerification({ petitionId, user }))
});

export default reduxForm({
  form: 'trustConfirmation',
  fields: FIELDS.map(field => field.name),
  validate: trustConfirmationValidator
},
  mapStateToProps,
  mapDispatchToProps
)(TrustConfirmationForm);
