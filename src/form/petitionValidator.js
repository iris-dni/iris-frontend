import FIELDS from 'components/PetitionForm/fields';
import fieldValidator from 'form/fieldValidator';

export default (values) => fieldValidator(FIELDS, values);
