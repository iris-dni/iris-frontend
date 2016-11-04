import { every } from 'lodash/collection';

export default ({ petitions }) => every(petitions, item => item.data.length);
