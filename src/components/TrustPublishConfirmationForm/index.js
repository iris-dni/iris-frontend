import React from 'react';
import { reduxForm } from 'redux-form';
import { publishPetition, resendVerification } from 'actions/PetitionActions';
import trustPublishConfirmationValidator from 'form/trustPublishConfirmationValidator';
import assignPetitionData from 'form/assignPetitionData';
import Fieldset from 'components/Fieldset';
import FormFieldsIterator from 'components/FormFieldsIterator';
import Button from 'components/Button';
import ButtonLink from 'components/ButtonLink';
import ButtonSet from 'components/ButtonSet';
import FIELDS from './fields';
import trustForm from 'selectors/trustForm';
import hasValidPublishUserData from 'helpers/hasValidPublishUserData';

const TrustPublishConfirmationForm = ({
  fields,
  handleSubmit,
  publishPetition,
  resendVerification,
  me,
  petition,
  submitting,
  canBePublished
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
          href={`/trust/publish/${petition.id}`}
          text={'Back to details'}
        />
        <Button
          onClick={() => resendVerification(petition)}
          disabled={!canBePublished || petition.isLoading}
          type={'button'}
          text={'Re-send SMS'}
        />
        <Button
          text={'Complete verification'}
          modifier={'accent'}
          disabled={!canBePublished || submitting || !fields._meta.allValid}
        />
      </ButtonSet>
    </Fieldset>
  </form>
);

TrustPublishConfirmationForm.propTypes = {
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  publishPetition: React.PropTypes.func.isRequired,
  resendVerification: React.PropTypes.func.isRequired,
  petition: React.PropTypes.object.isRequired,
  me: React.PropTypes.object.isRequired,
  submitting: React.PropTypes.bool.isRequired,
  canBePublished: React.PropTypes.bool.isRequired
};

export const mapStateToProps = ({ petition, me, trust }) => ({
  ...trustForm(petition, me, trust),
  canBePublished: hasValidPublishUserData(petition.owner)
});

export const mapDispatchToProps = (dispatch) => ({
  publishPetition: (trustData) => dispatch(publishPetition(trustData)),
  resendVerification: (petition) => dispatch(resendVerification({ petition }))
});

export default reduxForm({
  form: 'trustPublishConfirmation',
  fields: FIELDS.map(field => field.name),
  validate: trustPublishConfirmationValidator
},
  mapStateToProps,
  mapDispatchToProps
)(TrustPublishConfirmationForm);
