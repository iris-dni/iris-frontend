import hasValidUserData from 'helpers/hasValidUserData';

export default (petition = {}) => hasValidUserData(petition.owner);
