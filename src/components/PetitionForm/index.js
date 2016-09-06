import React from 'react';
import { reduxForm } from 'redux-form';
import {
  createPetition,
  updatePetition,
  publishPetition
} from 'actions/PetitionActions';
import petitionValidator from 'form/petitionValidator';
import Fieldset from 'components/Fieldset';
import FormField from 'components/FormField';
import Button from 'components/Button';
import ButtonSet from 'components/ButtonSet';
import settings from 'settings';
import getPetitionForm from 'selectors/petitionForm';
import FIELDS from './fields';

const PetitionForm = ({ petition, fields, handleSubmit, submitting, pristine, publishPetition }) => (
  <form onSubmit={handleSubmit(petition.persisted ? updatePetition : createPetition)}>
    <Fieldset>
      {FIELDS.map(field => (
        <FormField
          key={field.name}
          config={field}
          helper={fields[field.name]}
        />
      ))}
    </Fieldset>

    <Fieldset modifier={'actions'}>
      <ButtonSet>
        <Button
          disabled={submitting || !fields._meta.allValid || pristine}
          modifier={petition.persisted && pristine ? 'default' : 'accent'}
          text={settings.petitionForm[petition.persisted ? 'saveButton' : 'createButton']}
        />

        {petition.persisted && !petition.published &&
          <Button
            type={'button'}
            disabled={submitting || !pristine}
            modifier={'accent'}
            text={settings.petitionForm.publishButton}
            onClick={() => publishPetition(petition)}
          />
        }
      </ButtonSet>
    </Fieldset>
  </form>
);

PetitionForm.propTypes = {
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  resetForm: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired
};

export const mapStateToProps = ({ petition }) => ({
  initialValues: petition,
  petition: getPetitionForm(petition)
});

export const mapDispatchToProps = (dispatch) => ({
  publishPetition: (petition) => dispatch(publishPetition(petition))
});

export default reduxForm({
  form: 'simple',
  fields: FIELDS.map(field => field.name),
  validate: petitionValidator
}, mapStateToProps, mapDispatchToProps)(PetitionForm);
