import { every } from 'lodash/collection';

export default ({ groupedPetitions }) => every(groupedPetitions, item => item.data.length);
