import FIELDS from 'components/TrustSupportForm/fields';
import fieldValidator from 'form/fieldValidator';

export default (values) => {
  return fieldValidator(FIELDS, values);
};
