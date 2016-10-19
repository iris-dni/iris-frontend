import hasValidPublishUserData from 'helpers/hasValidPublishUserData';

export default (petition = {}) => hasValidPublishUserData(petition.owner);
