import FIELDS from 'components/RespondToPetitionForm/fields';
import fieldValidator from 'form/fieldValidator';

export default (values) => {
  return fieldValidator(FIELDS, values);
};
