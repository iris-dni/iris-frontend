import FIELDS from 'components/TrustForm/fields';
import fieldValidator from 'form/fieldValidator';

export default (values) => {
  return fieldValidator(FIELDS, values);
};
