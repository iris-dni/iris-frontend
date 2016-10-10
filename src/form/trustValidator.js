import FIELDS_SUPPORTING from 'components/TrustForm/fieldsForSupporting';
import fieldValidator from 'form/fieldValidator';

export default (values) => {
  return fieldValidator(FIELDS_SUPPORTING, values);
};
