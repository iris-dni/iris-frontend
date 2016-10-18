import FIELDS from 'components/TrustPublishConfirmationForm/fields';
import fieldValidator from 'form/fieldValidator';

export default (values) => {
  return fieldValidator(FIELDS, values);
};
