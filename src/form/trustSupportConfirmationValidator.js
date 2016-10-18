import FIELDS from 'components/TrustSupportConfirmationForm/fields';
import fieldValidator from 'form/fieldValidator';

export default (values) => {
  return fieldValidator(FIELDS, values);
};
